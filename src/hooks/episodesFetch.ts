import useSWR from 'swr'
import moment from 'moment'

export interface ItemInterface {
  title: string
  description: string
  date: string
  episodeLink: string
  thumbLink: string
}

export function useFetch(url: string) {
  const { data, error } = useSWR(url, async url => {
    const response = await fetch(url)
    const fetched = await response.text()

    const parser = new DOMParser()
    const document = parser.parseFromString(fetched, 'text/xml')
    const items = Array.from(document.querySelectorAll('item'))

    const data = items.map(item => {
      const obj: ItemInterface = <ItemInterface>{}
      const title = item.querySelector('title')?.textContent
      obj.title = title || ''

      const description = item.querySelector('summary')?.textContent
      obj.description = description || ''

      const date = item.querySelector('pubDate')?.textContent
      const datinha = moment(new Date(date || ''))

      datinha.locale('pt-br')
      obj.date = datinha.format('ll') || ''

      const episodeLink = item.querySelector('episodeLink')?.textContent
      obj.episodeLink = episodeLink || ''

      const thumbLink = item.querySelector('image')?.getAttribute('href')
      obj.thumbLink = thumbLink || ''

      return obj
    })

    return data
  })

  return { data, error }
}
