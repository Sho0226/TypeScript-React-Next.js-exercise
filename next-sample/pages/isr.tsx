import { time } from "console"
import { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"

type ISRProps = {
    message : string
}

const ISR: NextPage<ISRProps> = (props) => {
    const { message } = props

    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>このページはISRによってビルド時に生成されたページです。</p>
            </main>
        </div>
    )
}

export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp} にこのページのgetStaticPropsが実行されました。`

    return {
        props: {
            message,
        },
    }
}

export default ISR