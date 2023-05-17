import { useEffect, useState } from "react";

const ChildSupport = () => {
    const [volunteers, setVolunteers] = useState([])
    

    useEffect(() => {
        fetch("http://localhost:3000/")
        .then(res => res.json())
        .then(data => setVolunteers(data))
    }, [])

    //   generateRandomColor()
    return (
        <main className="grid md:grid-cols-4 gap-5 ui-container mt-[40vh] md:-mt-[170px] mb-20">
            {
                volunteers.map((volunteer) => {
                    return (
                        <article key={volunteer._id} className="w-full relative">
                            <img className="w-full" src={volunteer.image} alt="" />
                            <div style={{background: volunteer.bg}} className="w-full h-20 flex items-center justify-center px-3 rounded-b-lg absolute bottom-0 left-0 right-0">
                                <h3 className="text-center text-[20px] text-white">{volunteer.volunteer_name}</h3>
                            </div>
                        </article>
                    )
                })
            }


            
        </main>
    );
};

export default ChildSupport;