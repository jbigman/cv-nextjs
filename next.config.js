let assetPrefix = ''
let basePath = ''

const isGithubActions = process.env.GITHUB_ACTIONS ?? false
if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
  turbopack: {},
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**'
      }
    ]
  }
}
