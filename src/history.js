import createHistory from 'history/createBrowserHistory'

export function parseUrl (url) {
  const link = document.createElement('a')
  link.href = url
  return link
}

const basename = parseUrl(document.baseURI).pathname

const history = createHistory({ basename })

export default history
