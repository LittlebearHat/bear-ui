const fs = require('fs')
const axios = require('axios')

// 获取最新版本号
async function getLatestVersion(packageName) {
  try {
    const response = await axios.get(
      `https://registry.npmjs.org/${packageName}`
    )
    const latestVersion = response.data['dist-tags'].latest
    return latestVersion
  } catch (error) {
    console.error(`无法获取包 "${packageName}" 的最新版本号: ${error}`)
    return null
  }
}

// 读取原始的package.json文件
const packageJsonPath = './package.json'
const packageJson = require(packageJsonPath)

// 获取指定npm包的最新版本号，并对修订号进行加一处理
async function updatePackageVersion(packageName) {
  const latestVersion = await getLatestVersion(packageName)
  console.log(latestVersion)
  if (latestVersion) {
    const [major, minor, patch] = latestVersion.split('.').map(Number)
    const newVersion = `${major}.${minor}.${patch + 1}`
    packageJson.version = newVersion
    console.log(`更新包 "${packageName}" 的版本号为 ${newVersion}`)
  }
}

// 更新指定npm包的版本号
async function updatePackageVersions() {
  const packagesToUpdate = ['bear-plus'] // 指定要更新的npm包名称列表

  for (const packageName of packagesToUpdate) {
    await updatePackageVersion(packageName)
  }

  // 将更新后的package.json对象转换为JSON字符串
  const updatedPackageJsonString = JSON.stringify(packageJson, null, 2)

  fs.writeFileSync('../packages/bear-ui/package.json', updatedPackageJsonString)
  // 将更新后的package.json字符串写入文件
  // fs.writeFileSync(packageJsonPath, updatedPackageJsonString)

  console.log('package.json文件已更新')
}

updatePackageVersions()
