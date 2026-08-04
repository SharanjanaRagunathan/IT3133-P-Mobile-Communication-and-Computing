import '../CSS/Style.css'
function Logo(){
    return(
        <div style={{backgroundColor:'#3396D3',height:'250px'}}>
            <h1>Logo</h1>
            <img src={require('../Img/Logo.png')} alt='Uov logo' className='Logo'/>
        </div>
    )
}
export default Logo;
