import Community from "../components/community";

const Index = () => {
    return <div className="container-fluid">
        <header id="app-header" className="rounded d-flex justify-content-center">
            <div id="carouselExampleIndicators" className="side carousel" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/images/great-zimbabwe.jpg" height={400} className="d-block rounded" alt="Great Zimbabwe" />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/great-pyramids-of-giza.webp" height={400} className="d-block rounded" alt="Pyramids of Giza" />
                    </div>
                </div>
            </div>
        </header>

        <main id="app-main">
            <div className="row">
                <Community endpoint="africans" limit={10} />
            </div>
        </main>
    </div>
}

export default Index;