---
id: XYO-Tools
title: XYO Tools
---

<div class="alert alert-primary text-center" role="alert">
  <h3>Here is a complete listing of all automation tools that XYO uses for SDKs, apps, and other tools in development.</h3> 
</div>

## Why we use these tools

At the XYO Foundation, we strive for high-quality code that builds with safety for integration internally and externally. Automated CI/CD, dependency testing, and maintainability grading are essential to ensure that our code is usable across solutions and dev teams' needs.

These tools also focus and discipline our team to create the best possible experience for developers, and ultimately, our end users. 

<a href="https://stackshare.io/xyo-network/xyo-network" 
    rel="noopener noreferrer"
    target="_blank"
    class="alert alert-success text-center font-weight-bold"
    >
      For more information on our stack please check out our stackshare page.
  <i class="p-2 fas fa-external-link-alt"></i>
</a>

This page is also intended as a reference for all of our SDK Downloads in the case that any links are missed in the search for these resources, as well as the current code quality state of our Foundation code repositories. 

<div class="alert alert-primary" role="alert">
  <p>CI/CD Solution</p> 
</div>

Our primary CI/CD solution is [Travis CI](https://travis-ci.org) due to it's ease of use in setup, easy integration with GitHub, as well as its reporting tools. Travis gives us the flexibility we need across language and platform to test and deploy production code. 

<div class="alert alert-info" role="alert">
  <p>Code Quality</p> 
</div>

For a quick view into the quality of our code, we use [Codacy](https://www.codacy.com) for static code analysis. This helps us with code coverage, finding unnecessary duplication, security, and code complexity. We also strive to reduce our technical debt early in our development process rather than in active production. 

We also continue to integrate [Code Climate](https://codeclimate.com/quality/) into our projects for a second assessment of code quality for certain projects.

<div class="alert alert-warning" role="alert">
  <p>Dependency maintenance</p> 
</div>

For open source library vulnerability management, we use [snyk.io](https://snyk.io). We need to ensure that the libraries our projects may depend on are updated and secure. 

## Finding our SDKs

### Bintray 

This is where you can find our Android SDKs and additional tools. (All in kotlin).

<h3 class="text-center">SDK XYO Android</h3>

[![Download](https://api.bintray.com/packages/xyoraclenetwork/xyo/sdk-xyo-android/images/download.svg) ](https://bintray.com/xyoraclenetwork/xyo/sdk-xyo-android/_latestVersion)

<h3 class="text-center">SDK Core Kotlin</h3>

[![Download](https://api.bintray.com/packages/xyoraclenetwork/xyo/sdk-core-kotlin/images/download.svg?version=3.0.3)](https://bintray.com/xyoraclenetwork/xyo/sdk-core-kotlin/3.0.3/link)

<h3 class="text-center">SDK BLE Android</h3>

<a 
  href='https://bintray.com/xyoraclenetwork/xyo/sdk-ble-android/_latestVersion'
  rel="noopener noreferrer"
  target="_blank"
  class="font-weight-bold">
    <img src='https://api.bintray.com/packages/xyoraclenetwork/xyo/sdk-ble-android/images/download.svg'>
</a>

### CocoaPods

This is where you can find our Swift SDKs and tools. 

<h3 class="text-center">SDK XYO Swift</h3>

[![](https://img.shields.io/cocoapods/v/sdk-xyo-swift.svg?style=flat)](https://cocoapods.org/pods/sdk-xyo-swift)

<h3 class="text-center">SDK Core Swift</h3>

[![](https://img.shields.io/cocoapods/v/sdk-core-swift.svg?style=flat)](https://cocoapods.org/pods/sdk-core-swift)

<h3 class="text-center">SDK BLE Swift</h3>

[![](https://img.shields.io/cocoapods/v/XyBleSdk.svg?style=flat)](https://cocoapods.org/pods/XyBleSdk)

## Build and Code quality 

### Travis CI

Ensuring that our tools are built well and are functional is important to our software tools. 

<a href="https://travis-ci.org/XYOracleNetwork/" 
    rel="noopener noreferrer"
    target="_blank"
    class="font-weight-bold"
    >
      See our listing in travis-ci.org
  <i class="p-2 fas fa-external-link-alt"></i>
</a>

### Codacy

Graded tool that lets you know well our code meets standards.

<h3 class="text-center">SDK XYO Android</h3>

<a
    href="https://www.codacy.com?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=XYOracleNetwork/sdk-xyo-android&amp;utm_campaign=Badge_Grade"
    rel="noopener noreferrer"
    target="_blank"
    class="font-weight-bold">
      <img src="https://api.codacy.com/project/badge/Grade/9712b501940e45428072255a283fa23a" class=""/>
</a>

<h3 class="text-center">SDK XYO Swift</h3>

<a 
  href="https://www.codacy.com/manual/pllearns/sdk-xyo-swift?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=XYOracleNetwork/sdk-xyo-swift&amp;utm_campaign=Badge_Grade"    
  rel="noopener noreferrer"
  target="_blank"
  class="font-weight-bold">
    <img src="https://api.codacy.com/project/badge/Grade/6a10ff4a324d4d02a74a7a6724a53eef"/>
</a>

<h3 class="text-center">SDK Core Swift</h3>

<a 
  href="https://www.codacy.com/manual/XYOracleNetwork/sdk-core-swift?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=XYOracleNetwork/sdk-core-swift&amp;utm_campaign=Badge_Grade"
  rel="noopener noreferrer"
  target="_blank"
  class="font-weight-bold">
    <img src="https://api.codacy.com/project/badge/Grade/528a6aaa6b4d4f21871fede9be3f4fc3"/>
</a>

<h3 class="text-center">SDK Core Kotlin</h3>

<a
  href="https://www.codacy.com/manual/XYOracleNetwork/sdk-core-kotlin?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=XYOracleNetwork/sdk-core-kotlin&amp;utm_campaign=Badge_Grade"
  rel="noopener noreferrer"
  target="_blank"
  class="font-weight-bold">
    <img src="https://api.codacy.com/project/badge/Grade/2fb2eb69c1db455299ffce57b0216aa6"/>
</a>

<h3 class="text-center">SDK Ble Android</h3>

<a 
  href="https://www.codacy.com/manual/XYOracleNetwork/sdk-ble-android?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=XYOracleNetwork/sdk-ble-android&amp;utm_campaign=Badge_Grade"
  rel="noopener noreferrer"
  target="\_blank"
  class="font-weight-bold">
    <img src="https://api.codacy.com/project/badge/Grade/b14446847e614a2fae7152892765dac1"/>
</a>


<h3 class="text-center">SDK Ble Swift</h3>

<a 
  href="https://www.codacy.com/manual/pllearns/sdk-ble-swift?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=XYOracleNetwork/sdk-ble-swift&amp;utm_campaign=Badge_Grade"
  rel="noopener noreferrer"
  target="\_blank"
  class="font-weight-bold">
  <img src="https://api.codacy.com/project/badge/Grade/5abfb39d3a5640a296f3e04e46a7d98f"/>
</a>

<h3 class="text-center">SDK Archivist NodeJS</h3>

<a 
  href="https://www.codacy.com/manual/XYOracleNetwork/sdk-archivist-nodejs?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=XYOracleNetwork/sdk-archivist-nodejs&amp;utm_campaign=Badge_Grade"
  rel="noopener noreferrer"
  target="\_blank"
  class="font-weight-bold">
    <img src="https://api.codacy.com/project/badge/Grade/fafa47b9956b4b9fa05fee8619b79f38"/>
</a>

<h3 class="text-center">SDK Diviner NodeJS</h3>

<a 
  href="https://www.codacy.com?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=XYOracleNetwork/sdk-diviner-nodejs&amp;utm_campaign=Badge_Grade"
  rel="noopener noreferrer"
  target="\_blank"
  class="font-weight-bold">
  <img src="https://api.codacy.com/project/badge/Grade/ac5532f7a9384c4a913301e74ea0ad6a"/>
</a>

<h3 class="text-center">SDK Dache NodeJS</h3>

<a 
  href="https://www.codacy.com/manual/XYOracleNetwork/sdk-dache-nodejs?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=XYOracleNetwork/sdk-dache-nodejs&amp;utm_campaign=Badge_Grade"
  rel="noopener noreferrer"
  target="\_blank"
  class="font-weight-bold">
    <img src="https://api.codacy.com/project/badge/Grade/9977150c536b421b849f5b196824a8e4"/>
</a>

### Snyk

We use [snyk.io](https://snyk.io) for the state of the dependencies that our tools use. 

### Code Climate

We use [Code Climate](https://codeclimate.com/quality/) for an additional measure of maintainability of our code. 

<div class="alert alert-danger text-center" role="alert">
  <h3>Please note that the automated tools that we use are subject to change based on business needs and considered input by the development community and the dev staff at XYO</h3> 
</div>

<div class="alert alert-primary text-center" role="alert">
  <p>The XYO Foundation is open to suggestions and recommendations on tools to use in the building of software. We recommend those suggestions be sent either on our Dev Community Slack Channel or through an issue on a particular XYO repo.</p> 
</div>
