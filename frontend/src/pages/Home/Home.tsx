import { HeroContainer, TagsContainer, Main, FeedContainer } from "./style"
import Hero from "../../assets/images/imagemHero.png"
import Header from "../../components/Header/Header"
import Tags from "../../components/Tags/Tags"
import TrendingBox from "../../components/TrendingPosts/TrendingBox/TrendingBox"
import FeedPost from "../../components/FeedPost/FeedPost"


export default function Home() {

    return (
        <>
            <Header />
            <HeroContainer>
                <img src={Hero} alt={Hero} />
                <div>
                    <p>Um slogan <br /> Jamais <br /> Pensado</p>
                </div>
            </HeroContainer>

            <Main>
                <FeedContainer>
                    <TagsContainer>
                        <Tags />
                        <Tags />
                        <Tags />
                        <Tags />
                        <Tags />
                    </TagsContainer>

                    <ul>
                        <FeedPost />
                        <FeedPost />
                        <FeedPost />
                        <FeedPost />
                        <FeedPost />
                    </ul>
                </FeedContainer>

                <TrendingBox />

            </Main>

        </>
    )
}