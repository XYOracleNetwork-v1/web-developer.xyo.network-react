const gulp = require('gulp')
const awspublish = require('gulp-awspublish')
const parallel = require('concurrent-transform')
const invalidateCloudfront = require('gulp-cloudfront-invalidate')
const util = require('util')
const childProcess = require('child_process')
const config = require('./config.json')

const exec = util.promisify(childProcess.exec)

const { s3BucketName, region, cloudFrontDistributionId } = config

const confirmProductionBranch = async () => {
  const BRANCH_TO_TEST = 'develop'
  console.log(`Confirming current branch is set to ${BRANCH_TO_TEST}`)

  try {
    const response = await exec('git rev-parse --abbrev-ref HEAD')
    const currentBranch = response.stdout.trim()
    console.log(`Current branch: ${currentBranch}`)

    if (currentBranch !== BRANCH_TO_TEST) {
      throw new Error(`Error: Current branch ${currentBranch} does not match desired branch of ${BRANCH_TO_TEST}`)
    }

    console.log('Branch match confirmed')
  } catch (error) {
    console.log(error.message)
  }
}

const publishProd = () => {
  const publisher = awspublish.create(
    {
      region,
      params: {
        Bucket: s3BucketName,
      },
    },
    {
      cacheFileName: `awspublish-${s3BucketName}.cache`,
    },
  )

  return (
    gulp
      .src('./build/xyo-devs/**/*')
      .pipe(parallel(publisher.publish(), 50))
      // create a transform stream that delete old files from the bucket.
      .pipe(parallel(publisher.sync(null, [/^images/]), 50))
      // invalidate Cloudfront Distribution cache
      .pipe(invalidateCloudfront({
        distribution: cloudFrontDistributionId,
        paths: ['/*'],
        wait: false,
      }))
      // create a cache file to speed up consecutive uploads
      .pipe(publisher.cache())
      // print upload updates to console
      .pipe(awspublish.reporter())
  )
}

gulp.task('confirmBranch', callback => confirmProductionBranch()
  .then(callback)
  .catch(callback))

gulp.task('publishProd', publishProd)

gulp.task('publish', gulp.series('confirmBranch', 'publishProd'))