import { Footer } from 'flowbite-react';
const Footers = () => {
      return (
            <>
                  <Footer container className='mt-32'>
                        <div className="w-full text-center">
                              <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                                    <Footer.Brand
                                          href="/"
                                          name="belajarAja"
                                    />
                                    <Footer.LinkGroup>
                                          <Footer.Link href="#">About</Footer.Link>
                                          <Footer.Link href="#">Privacy Policy</Footer.Link>
                                          <Footer.Link href="#">Licensing</Footer.Link>
                                          <Footer.Link href="#">Contact</Footer.Link>
                                    </Footer.LinkGroup>
                              </div>
                              <Footer.Divider />
                              <Footer.Copyright href="#" by="GarudaCodex™" year={2024} />
                        </div>
                  </Footer>
            </>
      )
}
export default Footers