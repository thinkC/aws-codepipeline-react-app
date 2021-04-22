 
 const BirthdayList = ({birthdayName})=>{
    const {name, img, age, daysLeft, date_birth} = birthdayName;
    return(
        <>
        
        <div >
            <article className="outer">
                <div className="imgDiv">
                    <img src={img} alt="picture" width="50px"/>
                </div>
                <div className="left">
                <h2>{name}</h2>
                <p>{date_birth}</p>
                <p>{daysLeft}</p>
                </div>
                <div className="right">
                <span>turns {age}</span> 
                </div>
                
            </article>
        </div>
        </>
    )
 }


 
 export default BirthdayList