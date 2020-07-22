import Container from './container'
import { EXAMPLE_PATH } from '@/lib/constants'



export default function Footer() {
  const theDate = Date.now()

  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
      <div>
        <Date dateString={theDate} />
      </div>
      </Container>
    </footer>
  )
}
