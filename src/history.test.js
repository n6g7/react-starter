import history, { parseUrl } from './history'

describe('history', () => {
  describe('parseUrl', () => {
    it('works', () => {
      const result = parseUrl('https://user:password@yo.fr:80/page?a=b&c=d#12')

      expect(result.href).toBe('https://user:password@yo.fr:80/page?a=b&c=d#12')
      expect(result.origin).toBe('https://yo.fr:80')
      expect(result.host).toBe('yo.fr:80')
      expect(result.protocol).toBe('https:')
      expect(result.username).toBe('user')
      expect(result.password).toBe('password')
      expect(result.hostname).toBe('yo.fr')
      expect(result.port).toBe('80')
      expect(result.pathname).toBe('/page')
      expect(result.search).toBe('?a=b&c=d')
      expect(result.hash).toBe('#12')
    })
  })

  it('creates a history at baseURI', () => {
    const href = history.createHref({ pathname: '/mno' })

    expect(href).toEqual('/base/mno')
  })
})
