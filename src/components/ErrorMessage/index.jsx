import error_img from './Error.gif'

export default function ErrorMessage () {
    return (
        <>
        <img
            style={{
                display: 'block',
                width: '150px',
                height: '150px',
                objectFit: 'contain',
                margin: '0 auto'
            }}
            src={error_img} alt="error" />
        </>
    )
}
