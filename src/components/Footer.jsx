import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router'

const Footer = () => {
  const footerLinks = {
    product: {
      title: 'Product',
      links: [
        { name: 'Features', href: '/features' },
        { name: 'Design', href: '/design' },
        { name: 'Interactions', href: '/interactions' },
        { name: 'Page Building', href: '/page-building' },
        { name: 'AI Assistant', href: '/ai' }
      ]
    },
    company: {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    resources: {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'Tutorials', href: '/tutorials' },
        { name: 'Community', href: '/community' },
        { name: 'Support', href: '/support' },
        { name: 'API', href: '/api' }
      ]
    }
  };

  const socialLinks = [
    { icon: <FaFacebook />, href: 'https://facebook.com' },
    { icon: <FaTwitter />, href: 'https://twitter.com' },
    { icon: <FaInstagram />, href: 'https://instagram.com' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com' },
    { icon: <FaYoutube />, href: 'https://youtube.com' }
  ];

  return (
    <footer className='bg-black text-white pt-20 pb-10'>
      <div className='primary-container'>
        <div className='flex flex-col md:flex-row justify-between md:gap-24 gap-16 mb-16'>
          <div className='md:w-1/3'>
            <Link to="/" className='text-2xl font-bold mb-4 inline-block'><span className='text-blue-500'>CodeTutor</span> UI</Link>
            <p className='text-gray-400 md:w-2/3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nesciunt error, in voluptatem hic reiciendis?</p>
          </div>

          <div className='md:w-2/3'>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-8 items-center'>
              {
                Object.values(footerLinks).map((section) => (
                  <div key={section.title}>
                    <h3 className='text-lg font-semibold mb-4'>{section.title}</h3>
                    <ul className='space-y-2'>
                      {
                        section.links.map((link) => (
                          <li key={link.name} className='mb-2'>
                            <Link to={link.href} className='text-gray-400 hover:text-blue-500 transition-colors duration-200'>{link.name}</Link>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                ))
              }
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className='flex space-x-6 mb-4 md:mb-0'>
            {
              socialLinks.map((social, index) => (
                <Link to="/" key={index} className='text-gray-400 hover:text-blue-500 transition-colors text-xl'>
                  {social.icon}
                </Link>
              ))
            }
          </div>
          <div className='text-gray-400 text-sm'>
            © {new Date().getFullYear()} CodeTutor UI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer