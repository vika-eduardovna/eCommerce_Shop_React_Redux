import spinner from './Skateboarding.gif'

export default function Spinner () {
    return (
        <img
            style={{
                display: 'block',
                width: '200px',
                height: '200px',
                objectFit: 'contain',
                margin: '200px auto'
            }}
            src={spinner} alt="spinner" />
    )
}