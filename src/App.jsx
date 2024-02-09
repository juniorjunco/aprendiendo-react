
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
   return(
    <section className='App'>
    <TwitterFollowCard userName='rjuniorjunco'>
     JuniorJunco
    </TwitterFollowCard>
     
    <TwitterFollowCard userName='Beliancq'>
     belian 
    </TwitterFollowCard>
    <TwitterFollowCard userName='abrahambaar'>
     Abraham S
     </TwitterFollowCard>
    </section>
    
   )
}