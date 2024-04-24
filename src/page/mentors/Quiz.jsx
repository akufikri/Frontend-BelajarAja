import { Button } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'
const Quiz = () => {
      const navigate = useNavigate()
      const handleRedirectCreate = () => {
            navigate('/mentor/create/quiz')
      }
      return (
            <>
                  <div>

                        <div className="mb-5">
                              <Button onClick={handleRedirectCreate} color='light' size="sm" className='transition shadow-md'><i className="fa-regular fa-circle-plus me-3"></i>  <span>Create</span></Button>
                        </div>
                  </div>
            </>
      )
}
export default Quiz