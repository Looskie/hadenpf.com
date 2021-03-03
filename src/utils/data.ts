import yaml from 'js-yaml'
import { GalleryEntry } from '../components/Gallery'

export async function loadProjects(): Promise<Record<string, GalleryEntry>> {
  try {
    const filePath = (await import('path')).resolve(`src/data/projects.yml`)

    if ((await import('fs')).existsSync(filePath)) {
      const raw = (await import('fs')).readFileSync(filePath, 'utf-8')
      return yaml.load(raw) as Record<string, GalleryEntry>
    }
  } catch (err) {
    console.log({ err })
    return {}
  }
}
