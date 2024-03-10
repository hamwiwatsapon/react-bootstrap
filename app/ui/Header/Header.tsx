import TopNav from "@/app/ui/TopNav/TopNav"
import ContentCard from "@/app/ui/ContentCard/ContentCard"
const Header = () => {
  return (
    <div>
      <TopNav />
      <ContentCard 
        image="/homeFirst.svg"
        title="Virtual healthcare for you" 
        detail="Trafalgar provides progressive, and affordable 
        healthcare, accessible on mobile and online 
        for everyone" 
        button="Consult today"
        direction=""
      />
    </div>
  )
}

export default Header