import logo from '../assets/logo-small.png';
const style={
    height: '150px',
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
};
export function Logo() {
    return (
        <div className='flex justify-center items-center' style={style}>

            <h1 className='text-sm md:text-2xl text-gray-800 hover:text-primary transition-colors'>{`<elMonoDespelucado/>`}</h1>
        </div>
        // <img src={logo} alt="Logo" className='max-h-60' />
    );
}