import prisma from "../data/db";

type PostBody = {
    title: string,
    text: string,
    image_url: string | null,
    user_id: number
}

export function postPostDB(body: PostBody) {

    return prisma.posts.create({
        data: {
            title: body.title,
            text: body.text,
            user_id: body.user_id,
            image_url: body.image_url ? body.image_url : ''
        }
    })
} 