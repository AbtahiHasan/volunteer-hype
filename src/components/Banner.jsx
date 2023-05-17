

const Banner = () => {
    return (
        <section className="absolute top-28 left-0 right-0 ui-container">
            <h2 className="text-3xl font-bold text-center">I grow by helping people in need.</h2>
            <div>
                <form className="overflow-hidden border my-10 h-[45px] max-w-[500px] min-w-[280px] rounded mx-auto">
                    <input className="h-full outline-none w-[75%] px-5" type="text" autoComplete="off" placeholder="Search...." />
                    <button className="bg-[#3F90FC] border border-[#3F90FC] w-[25%] h-full px-3 text-white" type="submit">Search</button>
                </form>
            </div>
        </section>
    );
};

export default Banner;