import React from 'react'

export default function AboutUs() {
    return (
        <>
        <h2  className="mt-2" style={{textAlign:"center"}}>About Us</h2>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                    <div className="card mb-3" style={{maxWidth: "540px;"}}>
                        <div className="row g-0">
                            <div className="col-md-6 border border-warning ">
                            <img src="https://t3.ftcdn.net/jpg/06/17/02/08/360_F_617020806_eb8acQoO9IxsOMVpAtJNs79hvfyimFJt.jpg" className="img-fluid rounded-start" alt="..." style={{height:"100%"}}/>
                            </div>
                            <div className="col-md-6 border border-warning rounded">
                            <div className="card-body ">
                                <h5 className="card-title ">The Animal Kingdom</h5>
                                <p className="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                The history of pets is intertwined with the process of animal domestication, and it is likely that the dog, as the first domesticated species, was also the first pet. Perhaps the initial steps toward domestication were taken largely through the widespread human practice of making pets of captured young wild animals. Eventually, a working relationship developed between the dogs and their human captors. The dog was swifter, had stronger jaws, and was better at tracking prey; therefore, it could be of great use in hunting and guarding duties. From human beings, on the other hand, the dogs were assured of a constant supply of food as well as warmth from the fire.</p>
                                <p>The pet-and-owner relationship, however, is not only founded on companionship; since the earliest period of domestication, pets have fulfilled practical, economic ends. Catching other animals to feed their human masters is one of the most fundamental uses of pets, and not only dogs have served in this capacity but cats, hyenas, and lions have also been used for hunting</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
