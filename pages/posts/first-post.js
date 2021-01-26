import Link from 'next/link'

export default function FirstPost () {

    return <div>
        <h1>First Post</h1>
        <h2>
            <Link href="/">
                <a>back to root /</a>    
            </Link>            
        </h2>
    </div>
}