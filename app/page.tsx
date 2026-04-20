import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import AudienceInsight from '@/components/AudienceInsight'
import Positioning from '@/components/Positioning'
import NotThisButThis from '@/components/NotThisButThis'
import ValueProposition from '@/components/ValueProposition'
import BigIdea from '@/components/BigIdea'
import SystemDiagram from '@/components/SystemDiagram'
import Tagline from '@/components/Tagline'
import Rationale from '@/components/Rationale'
import ArtDirection from '@/components/ArtDirection'
import DefaultVsCoreDemo from '@/components/DefaultVsCoreDemo'
import InProductActivation from '@/components/InProductActivation'
import EarnedMedia from '@/components/EarnedMedia'
import First60Days from '@/components/First60Days'
import Footer from '@/components/Footer'
import VioletPulse from '@/components/ui/VioletPulse'

const SectionDivider = () => (
  <div style={{ borderTop: '1px solid #111111', margin: '0 24px' }} />
)

export default function Home() {
  return (
    <main style={{ background: '#09090B', minHeight: '100vh' }}>
      <Nav />

      <Hero />

      <SectionDivider />

      {/* 01 — Strategy */}
      <div id="strategy">
        <AudienceInsight />
        <VioletPulse />
        <Positioning />
        <NotThisButThis />
        <VioletPulse />
        <ValueProposition />
      </div>

      <SectionDivider />

      {/* 02 — Creative Platform */}
      <div id="creative">
        <BigIdea />
        <SystemDiagram />
        <VioletPulse />
        <Tagline />
        <VioletPulse />
        <Rationale />
      </div>

      <SectionDivider />

      {/* 03 — Art Direction */}
      <div id="art">
        <ArtDirection />
        <VioletPulse />
        <DefaultVsCoreDemo />
      </div>

      <SectionDivider />

      {/* 04 — Activations */}
      <div id="activations">
        <InProductActivation />
        <VioletPulse />
        <EarnedMedia />
      </div>

      <SectionDivider />

      {/* 05 — First 60 Days */}
      <div id="sixty">
        <First60Days />
      </div>

      <Footer />
    </main>
  )
}
