function GetTime(){
    const time = new Date().toLocaleTimeString();
    return time;
}

export default function Timing(){
    return (
        <div>
            <h1>Welcome to local clock</h1>
            <h2>The current time is <GetTime /></h2>
        </div>
    )
}