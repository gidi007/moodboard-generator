import dynamic from 'next/dynamic'

const MoodboardGeneratorClient = dynamic(() => import('../../components/MoodboardGenerator'), {
  ssr: false,
})

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <MoodboardGeneratorClient />
    </div>
  )
}