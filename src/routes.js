import { Router } from 'express'
import ytdl from 'ytdl-core'
import { generateSlug } from './utils/generateSlug.js'

const routes = Router()

routes.get('/download', async (req, res) => {
    const { url } = req.query

    try {
        const videoInfo = await ytdl.getInfo(url)

        const title = generateSlug(videoInfo.videoDetails.title)

        const videoStream = ytdl(url)

        res.setHeader('Content-disposition', `attachment; filename="${title}.mp4"`)
        res.setHeader('Content-type', 'video/mp4')

        videoStream.pipe(res)
        videoStream.on('end', () => {
            res.end()
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Ocorreu um erro ao baixar o vídeo' })
    }
})

export default routes