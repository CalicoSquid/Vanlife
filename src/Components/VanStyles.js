export default function VanStyles(type) {
    const styles = 
        type === "luxury" ? {background: "#161616"} :
        type === "rugged" ? { background: "#115E59"} :
        type === "simple" ? {background: "#E17654"} :
        null


    return styles
}