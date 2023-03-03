import Link from "next/link"

const index = () => {
  return (
    <div>
      index
      <Link href="/contact">コンタクトページへ移動</Link>
    </div>
  )
}

export default index