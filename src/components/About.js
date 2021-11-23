function About({
    imageSrc="https://via.placeholder.com/215",
    about
}) {
    return (
        <div className="about">
            <aside>
                <img 
                src={imageSrc}
                alt='blog logo'/>
                <p>{about}</p>
            </aside>
        </div>
    )
}

export default About   