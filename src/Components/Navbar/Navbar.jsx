import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu_icon.png";
import close_icon from "../../assets/close_icon.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
    <nav className="navcontainer">
      <img src={logo} alt="Morison Insurance" className="logo" />
      <img
  src={mobileMenu ? close_icon : menu_icon}
  alt={mobileMenu ? "Close Menu" : "Open Menu"}
  className="menu-icon"
  onClick={toggleMenu}
/>

      <ul className={`nav-links ${mobileMenu ? "mobile-open" : ""}`}>


        {/* HOME MEGA MENU */}
        <li className="dropdown mega-dropdown">
          <Link to="/home" className="nav-link">
            Home
          </Link>

          <div className="mega-menu">
            <div className="mega-column">
              <h4>Home Coverage</h4>
              <Link to="/home/home-insurance">Home Insurance</Link>
              <Link to="/home/bundled-home-auto-insurance">Bundled Home & Auto</Link>
              <Link to="/home/apartment-insurance">Apartment Insurance</Link>
              <Link to="/home/condo-insurance">Condo Insurance</Link>
              <Link to="/home/townhouse-insurance">Townhouse Insurance</Link>
              <Link to="/home/second-home-insurance">Second Home Insurance</Link>
              <Link to="/home/high-value-home-insurance">High-Value Home Insurance</Link>
            </div>

            <div className="mega-column">
              <h4>Rental & Special Homes</h4>
              <Link to="/home/tenants-insurance">Tenants Insurance</Link>
              <Link to="/home/student-rental-insurance">Student Rental Insurance</Link>
              <Link to="/home/rented-condo-insurance">Rented Condo Insurance</Link>
              <Link to="/home/rented-dwelling-insurance">Rented Dwelling Insurance</Link>
              <Link to="/home/landlord-insurance">Landlord Insurance</Link>
              <Link to="/home/duplex-triplex-fourplex-insurance">Duplex, Triplex & Fourplex</Link>
              <Link to="/home/chalet-insurance">Chalet Insurance</Link>
              <Link to="/home/cottage-insurance">Cottage Insurance</Link>
            </div>

            <div className="mega-column">
              <h4>Extras & Protection</h4>
              <Link to="/home/personal-liability-insurance">Personal Liability Insurance</Link>
              <Link to="/home/home-equipment-breakdown">Home Equipment Breakdown</Link>
              <Link to="/home/outbuilding-insurance">Outbuilding Insurance</Link>
              <Link to="/home/garden-insurance">Garden Insurance</Link>
              <Link to="/home/photography-equipment-insurance">Photography Equipment</Link>
              <Link to="/home/home-daycare-insurance">Home Daycare Insurance</Link>
              <Link to="/home/discounts">Discounts</Link>
            </div>
          </div>
        </li>

        {/* AUTO MEGA MENU */}
        <li className="dropdown mega-dropdown">
          <Link to="/auto" className="nav-link">
            Auto
          </Link>

          <div className="mega-menu">
            <div className="mega-column">
              <h4>Auto Coverage</h4>
              <Link to="/auto/car-insurance">Car Insurance</Link>
              <Link to="/auto/bundled-home-auto">Bundled Home & Auto</Link>
              <Link to="/auto/second-car-insurance">Second Car Insurance</Link>
              <Link to="/auto/weekend-car-insurance">Weekend Car Insurance</Link>
              <Link to="/auto/usage-based-insurance">Usage-Based Insurance</Link>
              <Link to="/auto/telematics-insurance">Telematics Insurance</Link>
              <Link to="/auto/discounts">Discounts</Link>
            </div>

            <div className="mega-column">
              <h4>Vehicle Types</h4>
              <Link to="/auto/electric-car-insurance">Electric Car Insurance</Link>
              <Link to="/auto/hybrid-car-insurance">Hybrid Car Insurance</Link>
              <Link to="/auto/luxury-car-insurance">Luxury Car Insurance</Link>
              <Link to="/auto/sports-car-insurance">Sports Car Insurance</Link>
              <Link to="/auto/classic-car-insurance">Classic Car Insurance</Link>
              <Link to="/auto/motorcycle-insurance">Motorcycle Insurance</Link>
              <Link to="/auto/pickup-truck-insurance">Pickup Truck Insurance</Link>
            </div>

            <div className="mega-column">
              <h4>Car Brands</h4>
              <Link to="/auto/audi-insurance">Audi Insurance</Link>
              <Link to="/auto/bentley-insurance">Bentley Insurance</Link>
              <Link to="/auto/ford-insurance">Ford Insurance</Link>
              <Link to="/auto/honda-insurance">Honda Insurance</Link>
              <Link to="/auto/hyundai-insurance">Hyundai Insurance</Link>
              <Link to="/auto/jeep-insurance">Jeep Insurance</Link>
              <Link to="/auto/kia-insurance">Kia Insurance</Link>
              <Link to="/auto/land-rover-insurance">Land Rover Insurance</Link>
              <Link to="/auto/lexus-insurance">Lexus Insurance</Link>
              <Link to="/auto/mercedes-insurance">Mercedes Insurance</Link>
              <Link to="/auto/nissan-insurance">Nissan Insurance</Link>
              <Link to="/auto/porsche-insurance">Porsche Insurance</Link>
              <Link to="/auto/tesla-insurance">Tesla Insurance</Link>
              <Link to="/auto/toyota-insurance">Toyota Insurance</Link>
            </div>
          </div>
        </li>

        {/* HIGH-VALUE MEGA MENU */}
        <li className="dropdown mega-dropdown">
          <Link to="/high-value" className="nav-link">
            High-Value
          </Link>

          <div className="mega-menu">
            <div className="mega-column">
              <h4>Luxury Property</h4>
              <Link to="/high-value/high-value-home-insurance">High-Value Home Insurance</Link>
              <Link to="/high-value/penthouse-insurance">Penthouse Insurance</Link>
              <Link to="/high-value/yacht-insurance">Yacht Insurance</Link>
            </div>

            <div className="mega-column">
              <h4>Luxury & Performance Vehicles</h4>
              <Link to="/high-value/luxury-car-insurance">Luxury Car Insurance</Link>
              <Link to="/high-value/audi-insurance">Audi Insurance</Link>
              <Link to="/high-value/bentley-insurance">Bentley Insurance</Link>
              <Link to="/high-value/land-rover-insurance">Land Rover Insurance</Link>
              <Link to="/high-value/lexus-insurance">Lexus Insurance</Link>
              <Link to="/high-value/mercedes-insurance">Mercedes Insurance</Link>
              <Link to="/high-value/porsche-insurance">Porsche Insurance</Link>
              <Link to="/high-value/tesla-insurance">Tesla Insurance</Link>
            </div>

            <div className="mega-column">
              <h4>Valuables & Collections</h4>
              <Link to="/high-value/jewellery-insurance">Jewellery Insurance</Link>
              <Link to="/high-value/engagement-ring-insurance">Engagement Ring Insurance</Link>
              <Link to="/high-value/watch-insurance">Watch Insurance</Link>
              <Link to="/high-value/fine-art-insurance">Fine Art Insurance</Link>
              <Link to="/high-value/musical-instrument-insurance">Musical Instrument Insurance</Link>
              <Link to="/high-value/wine-cellar-insurance">Wine Cellar Insurance</Link>
              <Link to="/high-value/scotch-whisky-collection-insurance">Scotch & Whisky Collection Insurance</Link>
            </div>
          </div>
        </li>

        {/* RECREATION MEGA MENU */}
        <li className="dropdown mega-dropdown">
          <Link to="/recreation" className="nav-link">
            Recreation
          </Link>
          <div className="mega-menu">
            <div className="mega-column">
              <h4>Watercraft & Marine</h4>
              <Link to="/recreation/boat-insurance">Boat Insurance</Link>
              <Link to="/recreation/seadoo-insurance">Seadoo Insurance</Link>
              <Link to="/recreation/yacht-insurance">Yacht Insurance</Link>
            </div>

            <div className="mega-column">
              <h4>Recreational Vehicles</h4>
              <Link to="/recreation/atv-insurance">ATV Insurance</Link>
              <Link to="/recreation/rv-insurance">RV Insurance</Link>
              <Link to="/recreation/travel-trailer-insurance">Travel Trailer Insurance</Link>
              <Link to="/recreation/snowmobile-insurance">Snowmobile Insurance</Link>
            </div>

            <div className="mega-column">
              <h4>Sports & Travel Protection</h4>
              <Link to="/recreation/golf-equipment-insurance">Golf Equipment Insurance</Link>
              <Link to="/recreation/ski-equipment-insurance">Ski Equipment Insurance</Link>
              <Link to="/recreation/snowboard-equipment-insurance">Snowboard Equipment Insurance</Link>
              <Link to="/recreation/travel-insurance">Travel Insurance</Link>
            </div>
          </div>
        </li>

        {/* BUSINESS MEGA MENU */}
        <li className="dropdown mega-dropdown">
          <Link to="/business" className="nav-link">
            Business
          </Link>
          <div className="mega-menu">
            <div className="mega-column">
              <h4>Who We Ensure</h4>
              <Link to="/business/accountants">Accountants</Link>
              <Link to="/business/arborists">Arborists</Link>
              <Link to="/business/audiologists">Audiologists</Link>
              <Link to="/business/bnb">B&B's</Link>
              <Link to="/business/bakeries">Bakeries</Link>
              <Link to="/business/barber-shops">Barber Shops</Link>
              <Link to="/business/breweries">Breweries</Link>
              <Link to="/business/bricklayers">Bricklayers</Link>
              <Link to="/business/carpenters">Carpenters</Link>
              <Link to="/business/chiropractors">Chiropractors</Link>
              <Link to="/business/cleaning-professionals">Cleaning Professionals</Link>
              <Link to="/business/coffee-shops">Coffee Shops</Link>
              <Link to="/business/construction-companies">Construction Companies</Link>
              <Link to="/business/consultants">Consultants</Link>
              <Link to="/business/contractors">Contractors</Link>
              <Link to="/business/dental-offices">Dental Offices</Link>
              <Link to="/business/doctors-offices">Doctors' Offices</Link>
              <Link to="/business/dog-daycares">Dog Daycares</Link>
              <Link to="/business/drywallers">Drywallers</Link>
              <Link to="/business/electricians">Electricians</Link>
              <Link to="/business/estheticians">Estheticians</Link>
              <Link to="/business/farmers">Farmers</Link>
              <Link to="/business/fleets">Fleets (Commercial Auto)</Link>
              <Link to="/business/flooring-contractors">Flooring Contractors</Link>
              <Link to="/business/food-trucks">Food Trucks</Link>
              <Link to="/business/framing-contractors">Framing Contractors</Link>
              <Link to="/business/freelancers">Freelancers</Link>
              <Link to="/business/hair-salons">Hair Salons</Link>
              <Link to="/business/handymen">Handymen</Link>
              <Link to="/business/hobby-farmers">Hobby Farmers</Link>
              <Link to="/business/home-builders">Home Builders</Link>
              <Link to="/business/hvac-professionals">HVAC Professionals</Link>
              <Link to="/business/ice-cream-shops">Ice Cream Shops</Link>
              <Link to="/business/interior-designers">Interior Designers</Link>
              <Link to="/business/landscapers">Landscapers</Link>
              <Link to="/business/laundromats">Laundromats</Link>
              <Link to="/business/locksmiths">Locksmiths</Link>
              <Link to="/business/manufacturers">Manufacturers</Link>
              <Link to="/business/massage-therapists">Massage Therapists</Link>
              <Link to="/business/mechanics">Mechanics</Link>
              <Link to="/business/non-profits">Non-Profits</Link>
              <Link to="/business/offices">Offices</Link>
            </div>

            <div className="mega-column">
              <h4>Business Insurance</h4>
              <Link to="/business/cargo-insurance">Cargo Insurance</Link>
              <Link to="/business/commercial-general-liability">Commercial General Liability</Link>
              <Link to="/business/commercial-property-insurance">Commercial Property Insurance</Link>
              <Link to="/business/commercial-contents-insurance">Commercial Contents Insurance</Link>
              <Link to="/business/directors-officers-insurance">Directors & Officers Insurance</Link>
              <Link to="/business/environmental-pollution-liability">Environmental/Pollution Liability</Link>
              <Link to="/business/equipment-breakdown-insurance">Equipment Breakdown Insurance</Link>
              <Link to="/business/errors-omissions-insurance">Errors & Omissions Insurance</Link>
              <Link to="/business/home-based-business-insurance">Home-Based Business Insurance</Link>
              <Link to="/business/legal-expense-insurance">Legal Expense Insurance</Link>
              <Link to="/business/product-liability-insurance">Product Liability Insurance</Link>
              <Link to="/business/professional-liability-insurance">Professional Liability Insurance</Link>
              <Link to="/business/public-liability-insurance">Public Liability Insurance</Link>
              <Link to="/business/rented-dwelling-insurance">Rented Dwelling Insurance</Link>
              <Link to="/business/student-rental-insurance">Student Rental Insurance</Link>
              <Link to="/business/tools-equipment-insurance">Tools & Equipment Insurance</Link>
              <Link to="/business/vacant-property-insurance">Vacant Property Insurance</Link>
            </div>

            <div className="mega-column">
              <h4>Additional Coverage</h4>
              <Link to="/business/business-interruption-coverage">Business Interruption Coverage</Link>
              <Link to="/business/commercial-cyber-coverage">Commercial Cyber Coverage</Link>
              <Link to="/business/commercial-umbrella-insurance">Commercial Umbrella/Excess Liability Coverage</Link>
            </div>
          </div>
        </li>

        {/* OTHER MEGA MENU */}
        <li className="dropdown mega-dropdown">
          <Link to="/other" className="nav-link">
            Other
          </Link>
          <div className="mega-menu other-menu">
            <div className="mega-column">
              <h4>Additional Charges</h4>
              <Link to="/other/additional-living-expenses">Additional Living Expenses Coverage</Link>
              <Link to="/other/contents-insurance">Contents Insurance Coverage</Link>
              <Link to="/other/cyber-coverage">Cyber Coverage</Link>
              <Link to="/other/engagement-ring-insurance">Engagement Ring Insurance</Link>
              <Link to="/other/home-based-business-coverage">Home Based Business Coverage</Link>
              <Link to="/other/identity-theft-coverage">Identity Theft Coverage</Link>
              <Link to="/other/jewellery-coverage">Jewellery Coverage</Link>
              <Link to="/other/outbuilding-insurance">Outbuilding Insurance Coverage</Link>
              <Link to="/other/overland-water-coverage">Overland Water Coverage</Link>
              <Link to="/other/rental-car-insurance">Rental Car Insurance</Link>
              
              
          
            </div>

            

            <div className="mega-column">
              <h4>Special Events</h4>
              <Link to="/other/party-alcohol-liability">Party Alcohol Liability Insurance</Link>
              <Link to="/other/wedding-insurance">Wedding Insurance</Link>
            </div>

            <div className="mega-column">
              <h4>Life Insurance</h4>
              <Link to="/other/life-insurance">Life Insurance</Link>
              <Link to="/other/disability-critical-illness">Disability & Critical Illness Insurance</Link>
            </div>

            <div className="mega-column">
              <h4>Why Us</h4>
              <Link to="/other/awards-recognition">Awards & Recognition</Link>
              <Link to="/other/our-story">Our Story</Link>
              <Link to="/other/our-team">Our Team</Link>
              <Link to="/other/our-values">Our Values</Link>
              <Link to="/other/our-community-partners">Our Community Partners</Link>
              <Link to="/other/our-insurance-partners">Our Insurance Partners</Link>
              
              <Link to="/other/why-choose-morison">Why Choose Morison Insurance</Link>
              
            </div>
          </div>
        </li>

      </ul>
      {mobileMenu && (
        <div className="mobile-menu">
          <div className={`mobile-section ${openSection === "home" ? "open" : ""}`}>
  <div
    className="mobile-section-title"
    onClick={() => setOpenSection(openSection === "home" ? null : "home")}
  >
    Home
  </div>

  {openSection === "home" && (
    <div className="mobile-links three-cols">
      {/* Main page link at top */}
      <div className="mobile-col">
        <Link
          to="/home"
          onClick={() => setMobileMenu(false)}
          style={{ fontWeight: 700, marginBottom: "12px" }}
        >
          Home Insurance Overview
        </Link>
      </div>

      {/* Subpages */}
      <div className="mobile-col">
        <h4>Home Coverage</h4>
        <Link to="/home/home-insurance" onClick={() => setMobileMenu(false)}>Home Insurance</Link>
        <Link to="/home/bundled-home-auto-insurance" onClick={() => setMobileMenu(false)}>Bundled Home & Auto</Link>
        <Link to="/home/apartment-insurance" onClick={() => setMobileMenu(false)}>Apartment Insurance</Link>
        <Link to="/home/condo-insurance" onClick={() => setMobileMenu(false)}>Condo Insurance</Link>
        <Link to="/home/townhouse-insurance" onClick={() => setMobileMenu(false)}>Townhouse Insurance</Link>
        <Link to="/home/second-home-insurance" onClick={() => setMobileMenu(false)}>Second Home Insurance</Link>
        <Link to="/home/high-value-home-insurance" onClick={() => setMobileMenu(false)}>High-Value Home Insurance</Link>
      </div>

      <div className="mobile-col">
        <h4>Rental & Special Homes</h4>
        <Link to="/home/tenants-insurance" onClick={() => setMobileMenu(false)}>Tenants Insurance</Link>
        <Link to="/home/student-rental-insurance" onClick={() => setMobileMenu(false)}>Student Rental Insurance</Link>
        <Link to="/home/rented-condo-insurance" onClick={() => setMobileMenu(false)}>Rented Condo Insurance</Link>
        <Link to="/home/rented-dwelling-insurance" onClick={() => setMobileMenu(false)}>Rented Dwelling Insurance</Link>
        <Link to="/home/landlord-insurance" onClick={() => setMobileMenu(false)}>Landlord Insurance</Link>
        <Link to="/home/duplex-triplex-fourplex-insurance" onClick={() => setMobileMenu(false)}>Duplex, Triplex & Fourplex</Link>
        <Link to="/home/chalet-insurance" onClick={() => setMobileMenu(false)}>Chalet Insurance</Link>
        <Link to="/home/cottage-insurance" onClick={() => setMobileMenu(false)}>Cottage Insurance</Link>
      </div>

      <div className="mobile-col">
        <h4>Extras & Protection</h4>
        <Link to="/home/personal-liability-insurance" onClick={() => setMobileMenu(false)}>Personal Liability Insurance</Link>
        <Link to="/home/home-equipment-breakdown" onClick={() => setMobileMenu(false)}>Home Equipment Breakdown</Link>
        <Link to="/home/outbuilding-insurance" onClick={() => setMobileMenu(false)}>Outbuilding Insurance</Link>
        <Link to="/home/garden-insurance" onClick={() => setMobileMenu(false)}>Garden Insurance</Link>
        <Link to="/home/photography-equipment" onClick={() => setMobileMenu(false)}>Photography Equipment</Link>
        <Link to="/home/home-daycare-insurance" onClick={() => setMobileMenu(false)}>Home Daycare Insurance</Link>
        <Link to="/home/discounts" onClick={() => setMobileMenu(false)}>Discounts</Link>
      </div>

    </div>
  )}
</div>


          {/* MOBILE AUTO SECTION */}
<div className={`mobile-section ${openSection === "auto" ? "open" : ""}`}>
  <div
    className="mobile-section-title"
    onClick={() => setOpenSection(openSection === "auto" ? null : "auto")}
  >
    Auto
  </div>

  {openSection === "auto" && (
    <div className="mobile-links three-cols">
      {/* Main page link at top */}
      <div className="mobile-col">
        <Link
          to="/auto"
          onClick={() => setMobileMenu(false)}
          style={{ fontWeight: 700, marginBottom: "12px" }}
        >
          Auto Insurance Overview
        </Link>
      </div>

      {/* Subpages */}
      <div className="mobile-col">
        <h4>Auto Coverage</h4>
        <Link to="/auto/car-insurance" onClick={() => setMobileMenu(false)}>Car Insurance</Link>
        <Link to="/auto/bundled-home-auto" onClick={() => setMobileMenu(false)}>Bundled Home & Auto</Link>
        <Link to="/auto/second-car-insurance" onClick={() => setMobileMenu(false)}>Second Car Insurance</Link>
        <Link to="/auto/weekend-car-insurance" onClick={() => setMobileMenu(false)}>Weekend Car Insurance</Link>
        <Link to="/auto/usage-based-insurance" onClick={() => setMobileMenu(false)}>Usage-Based Insurance</Link>
        <Link to="/auto/telematics-insurance" onClick={() => setMobileMenu(false)}>Telematics Insurance</Link>
        <Link to="/auto/discounts" onClick={() => setMobileMenu(false)}>Discounts</Link>
      </div>

      <div className="mobile-col">
        <h4>Vehicle Types</h4>
        <Link to="/auto/electric-car-insurance" onClick={() => setMobileMenu(false)}>Electric Car Insurance</Link>
        <Link to="/auto/hybrid-car-insurance" onClick={() => setMobileMenu(false)}>Hybrid Car Insurance</Link>
        <Link to="/auto/luxury-car-insurance" onClick={() => setMobileMenu(false)}>Luxury Car Insurance</Link>
        <Link to="/auto/sports-car-insurance" onClick={() => setMobileMenu(false)}>Sports Car Insurance</Link>
        <Link to="/auto/classic-car-insurance" onClick={() => setMobileMenu(false)}>Classic Car Insurance</Link>
        <Link to="/auto/motorcycle-insurance" onClick={() => setMobileMenu(false)}>Motorcycle Insurance</Link>
        <Link to="/auto/pickup-truck-insurance" onClick={() => setMobileMenu(false)}>Pickup Truck Insurance</Link>
      </div>

      <div className="mobile-col">
        <h4>Car Brands</h4>
        <Link to="/auto/audi-insurance" onClick={() => setMobileMenu(false)}>Audi Insurance</Link>
        <Link to="/auto/bentley-insurance" onClick={() => setMobileMenu(false)}>Bentley Insurance</Link>
        <Link to="/auto/ford-insurance" onClick={() => setMobileMenu(false)}>Ford Insurance</Link>
        <Link to="/auto/honda-insurance" onClick={() => setMobileMenu(false)}>Honda Insurance</Link>
        <Link to="/auto/hyundai-insurance" onClick={() => setMobileMenu(false)}>Hyundai Insurance</Link>
        <Link to="/auto/jeep-insurance" onClick={() => setMobileMenu(false)}>Jeep Insurance</Link>
        <Link to="/auto/kia-insurance" onClick={() => setMobileMenu(false)}>Kia Insurance</Link>
        <Link to="/auto/land-rover-insurance" onClick={() => setMobileMenu(false)}>Land Rover Insurance</Link>
        <Link to="/auto/lexus-insurance" onClick={() => setMobileMenu(false)}>Lexus Insurance</Link>
        <Link to="/auto/mercedes-insurance" onClick={() => setMobileMenu(false)}>Mercedes Insurance</Link>
        <Link to="/auto/nissan-insurance" onClick={() => setMobileMenu(false)}>Nissan Insurance</Link>
        <Link to="/auto/porsche-insurance" onClick={() => setMobileMenu(false)}>Porsche Insurance</Link>
        <Link to="/auto/tesla-insurance" onClick={() => setMobileMenu(false)}>Tesla Insurance</Link>
        <Link to="/auto/toyota-insurance" onClick={() => setMobileMenu(false)}>Toyota Insurance</Link>
      </div>
    </div>
  )}
</div>

          {/* HIGH-VALUE MOBILE SECTION */}
<div className={`mobile-section ${openSection === "high-value" ? "open" : ""}`}>
  <div
    className="mobile-section-title"
    onClick={() => setOpenSection(openSection === "high-value" ? null : "high-value")}
  >
    High-Value
  </div>

  {openSection === "high-value" && (
    <div className="mobile-links three-cols">
      {/* Main page link at top */}
      <div className="mobile-col">
        <Link
          to="/high-value"
          onClick={() => setMobileMenu(false)}
          style={{ fontWeight: 700, marginBottom: "12px" }}
        >
          High-Value Overview
        </Link>
      </div>

      {/* Subpages */}
      <div className="mobile-col">
        <h4>Luxury Property</h4>
        <Link to="/high-value/high-value-home-insurance" onClick={() => setMobileMenu(false)}>High-Value Home Insurance</Link>
        <Link to="/high-value/penthouse-insurance" onClick={() => setMobileMenu(false)}>Penthouse Insurance</Link>
        <Link to="/high-value/yacht-insurance" onClick={() => setMobileMenu(false)}>Yacht Insurance</Link>
      </div>

      <div className="mobile-col">
        <h4>Luxury & Performance Vehicles</h4>
        <Link to="/high-value/luxury-car-insurance" onClick={() => setMobileMenu(false)}>Luxury Car Insurance</Link>
        <Link to="/high-value/audi-insurance" onClick={() => setMobileMenu(false)}>Audi Insurance</Link>
        <Link to="/high-value/bentley-insurance" onClick={() => setMobileMenu(false)}>Bentley Insurance</Link>
        <Link to="/high-value/land-rover-insurance" onClick={() => setMobileMenu(false)}>Land Rover Insurance</Link>
        <Link to="/high-value/lexus-insurance" onClick={() => setMobileMenu(false)}>Lexus Insurance</Link>
        <Link to="/high-value/mercedes-insurance" onClick={() => setMobileMenu(false)}>Mercedes Insurance</Link>
        <Link to="/high-value/porsche-insurance" onClick={() => setMobileMenu(false)}>Porsche Insurance</Link>
        <Link to="/high-value/tesla-insurance" onClick={() => setMobileMenu(false)}>Tesla Insurance</Link>
      </div>

      <div className="mobile-col">
        <h4>Valuables & Collections</h4>
        <Link to="/high-value/jewellery-insurance" onClick={() => setMobileMenu(false)}>Jewellery Insurance</Link>
        <Link to="/high-value/engagement-ring-insurance" onClick={() => setMobileMenu(false)}>Engagement Ring Insurance</Link>
        <Link to="/high-value/watch-insurance" onClick={() => setMobileMenu(false)}>Watch Insurance</Link>
        <Link to="/high-value/fine-art-insurance" onClick={() => setMobileMenu(false)}>Fine Art Insurance</Link>
        <Link to="/high-value/musical-instrument-insurance" onClick={() => setMobileMenu(false)}>Musical Instrument Insurance</Link>
        <Link to="/high-value/wine-cellar-insurance" onClick={() => setMobileMenu(false)}>Wine Cellar Insurance</Link>
        <Link to="/high-value/scotch-whisky-collection-insurance" onClick={() => setMobileMenu(false)}>Scotch & Whisky Collection Insurance</Link>
      </div>
    </div>
  )}
</div>


          {/* RECREATION MOBILE SECTION */}
<div className="mobile-section">
  <div
    className="mobile-section-title"
    onClick={() => setOpenSection(openSection === "recreation" ? null : "recreation")}
  >
    Recreation
  </div>

  {openSection === "recreation" && (
    <div className="mobile-links three-cols">
      {/* Main page link at top */}
      <div className="mobile-col">
        <Link
          to="/recreation"
          onClick={() => setMobileMenu(false)}
          style={{ fontWeight: 700, marginBottom: "12px" }}
        >
          Recreation Overview
        </Link>
      </div>

      {/* Subpages */}
      <div className="mobile-col">
        <h4>Watercraft & Marine</h4>
        <Link to="/recreation/boat-insurance" onClick={() => setMobileMenu(false)}>Boat Insurance</Link>
        <Link to="/recreation/seadoo-insurance" onClick={() => setMobileMenu(false)}>Seadoo Insurance</Link>
        <Link to="/recreation/yacht-insurance" onClick={() => setMobileMenu(false)}>Yacht Insurance</Link>
      </div>

      <div className="mobile-col">
        <h4>Recreational Vehicles</h4>
        <Link to="/recreation/atv-insurance" onClick={() => setMobileMenu(false)}>ATV Insurance</Link>
        <Link to="/recreation/rv-insurance" onClick={() => setMobileMenu(false)}>RV Insurance</Link>
        <Link to="/recreation/travel-trailer-insurance" onClick={() => setMobileMenu(false)}>Travel Trailer Insurance</Link>
        <Link to="/recreation/snowmobile-insurance" onClick={() => setMobileMenu(false)}>Snowmobile Insurance</Link>
      </div>

      <div className="mobile-col">
        <h4>Sports & Travel Protection</h4>
        <Link to="/recreation/golf-equipment-insurance" onClick={() => setMobileMenu(false)}>Golf Equipment Insurance</Link>
        <Link to="/recreation/ski-equipment-insurance" onClick={() => setMobileMenu(false)}>Ski Equipment Insurance</Link>
        <Link to="/recreation/snowboard-equipment-insurance" onClick={() => setMobileMenu(false)}>Snowboard Equipment Insurance</Link>
        <Link to="/recreation/travel-insurance" onClick={() => setMobileMenu(false)}>Travel Insurance</Link>
      </div>
    </div>
  )}
</div>

          {/* BUSINESS MOBILE SECTION */}
<div className="mobile-section">
  <div
    className="mobile-section-title"
    onClick={() => setOpenSection(openSection === "business" ? null : "business")}
  >
    Business
  </div>

  {openSection === "business" && (
    <div className="mobile-links three-cols">
      {/* Main page link at top */}
      <div className="mobile-col">
        <Link
          to="/business"
          onClick={() => setMobileMenu(false)}
          style={{ fontWeight: 700, marginBottom: "12px" }}
        >
          Business Insurance Overview
        </Link>
      </div>

      {/* Subpages */}
      <div className="mobile-col">
        <h4>Who We Ensure</h4>
        <Link to="/business/accountants" onClick={() => setMobileMenu(false)}>Accountants</Link>
        <Link to="/business/arborists" onClick={() => setMobileMenu(false)}>Arborists</Link>
        <Link to="/business/audiologists" onClick={() => setMobileMenu(false)}>Audiologists</Link>
        <Link to="/business/bnb" onClick={() => setMobileMenu(false)}>B&B's</Link>
        <Link to="/business/bakeries" onClick={() => setMobileMenu(false)}>Bakeries</Link>
        <Link to="/business/barber-shops" onClick={() => setMobileMenu(false)}>Barber Shops</Link>
        <Link to="/business/breweries" onClick={() => setMobileMenu(false)}>Breweries</Link>
        <Link to="/business/bricklayers" onClick={() => setMobileMenu(false)}>Bricklayers</Link>
        <Link to="/business/carpenters" onClick={() => setMobileMenu(false)}>Carpenters</Link>
        <Link to="/business/chiropractors" onClick={() => setMobileMenu(false)}>Chiropractors</Link>
        <Link to="/business/cleaning-professionals" onClick={() => setMobileMenu(false)}>Cleaning Professionals</Link>
        <Link to="/business/coffee-shops" onClick={() => setMobileMenu(false)}>Coffee Shops</Link>
        <Link to="/business/construction-companies" onClick={() => setMobileMenu(false)}>Construction Companies</Link>
        <Link to="/business/consultants" onClick={() => setMobileMenu(false)}>Consultants</Link>
        <Link to="/business/contractors" onClick={() => setMobileMenu(false)}>Contractors</Link>
        <Link to="/business/dental-offices" onClick={() => setMobileMenu(false)}>Dental Offices</Link>
        <Link to="/business/doctors-offices" onClick={() => setMobileMenu(false)}>Doctors' Offices</Link>
        <Link to="/business/dog-daycares" onClick={() => setMobileMenu(false)}>Dog Daycares</Link>
      </div>

      <div className="mobile-col">
        <h4>Business Insurance</h4>
        <Link to="/business/cargo-insurance" onClick={() => setMobileMenu(false)}>Cargo Insurance</Link>
        <Link to="/business/commercial-general-liability" onClick={() => setMobileMenu(false)}>Commercial General Liability</Link>
        <Link to="/business/commercial-property-insurance" onClick={() => setMobileMenu(false)}>Commercial Property Insurance</Link>
        <Link to="/business/commercial-contents-insurance" onClick={() => setMobileMenu(false)}>Commercial Contents Insurance</Link>
        <Link to="/business/directors-officers-insurance" onClick={() => setMobileMenu(false)}>Directors & Officers Insurance</Link>
        <Link to="/business/environmental-pollution-liability" onClick={() => setMobileMenu(false)}>Environmental/Pollution Liability</Link>
        <Link to="/business/equipment-breakdown-insurance" onClick={() => setMobileMenu(false)}>Equipment Breakdown Insurance</Link>
        <Link to="/business/errors-omissions-insurance" onClick={() => setMobileMenu(false)}>Errors & Omissions Insurance</Link>
        <Link to="/business/home-based-business-insurance" onClick={() => setMobileMenu(false)}>Home-Based Business Insurance</Link>
      </div>

      <div className="mobile-col">
        <h4>Additional Coverage</h4>
        <Link to="/business/business-interruption-coverage" onClick={() => setMobileMenu(false)}>Business Interruption Coverage</Link>
        <Link to="/business/commercial-cyber-coverage" onClick={() => setMobileMenu(false)}>Commercial Cyber Coverage</Link>
        <Link to="/business/commercial-umbrella-excess-liability" onClick={() => setMobileMenu(false)}>Commercial Umbrella/Excess Liability Coverage</Link>
      </div>
    </div>
  )}
</div>

          {/* OTHER MOBILE SECTION */}
<div className="mobile-section">
  <div
    className="mobile-section-title"
    onClick={() => setOpenSection(openSection === "other" ? null : "other")}
  >
    Other
  </div>

  {openSection === "other" && (
    <div className="mobile-links three-cols">
      {/* Main page link at top */}
      <div className="mobile-col">
        <Link
          to="/other"
          onClick={() => setMobileMenu(false)}
          style={{ fontWeight: 700, marginBottom: "12px" }}
        >
          Other Services
        </Link>
      </div>

      {/* Subpages */}
      <div className="mobile-col">
        <h4>Additional Charges</h4>
        <Link to="/other/additional-living-expenses" onClick={() => setMobileMenu(false)}>Additional Living Expenses Coverage</Link>
        <Link to="/other/contents-insurance" onClick={() => setMobileMenu(false)}>Contents Insurance Coverage</Link>
        <Link to="/other/cyber-coverage" onClick={() => setMobileMenu(false)}>Cyber Coverage</Link>
        <Link to="/other/engagement-ring-insurance" onClick={() => setMobileMenu(false)}>Engagement Ring Insurance</Link>
        <Link to="/other/home-based-business-coverage" onClick={() => setMobileMenu(false)}>Home Based Business Coverage</Link>
        <Link to="/other/identity-theft-coverage" onClick={() => setMobileMenu(false)}>Identity Theft Coverage</Link>
        <Link to="/other/jewellery-coverage" onClick={() => setMobileMenu(false)}>Jewellery Coverage</Link>
        <Link to="/other/outbuilding-insurance" onClick={() => setMobileMenu(false)}>Outbuilding Insurance Coverage</Link>
        <Link to="/other/overland-water-coverage" onClick={() => setMobileMenu(false)}>Overland Water Coverage</Link>
        <Link to="/other/rental-car-insurance" onClick={() => setMobileMenu(false)}>Rental Car Insurance</Link>
    

        <h4>Special Events</h4>
        <Link to="/other/party-alcohol-liability" onClick={() => setMobileMenu(false)}>Party Alcohol Liability Insurance</Link>
        <Link to="/other/wedding-insurance" onClick={() => setMobileMenu(false)}>Wedding Insurance</Link>
      </div>

      <div className="mobile-col">
        <h4>Life Insurance</h4>
        <Link to="/other/life-insurance" onClick={() => setMobileMenu(false)}>Life Insurance</Link>
        <Link to="/other/disability-critical-illness" onClick={() => setMobileMenu(false)}>Disability & Critical Illness Insurance</Link>

        <h4>Why Us</h4>
        <Link to="/other/awards-recognition" onClick={() => setMobileMenu(false)}>Awards & Recognition</Link>
        <Link to="/other/our-story" onClick={() => setMobileMenu(false)}>Our Story</Link>
        <Link to="/other/our-team" onClick={() => setMobileMenu(false)}>Our Team</Link>
        <Link to="/other/our-values" onClick={() => setMobileMenu(false)}>Our Values</Link>
        <Link to="/other/our-community-partners" onClick={() => setMobileMenu(false)}>Our Community Partners</Link>
        <Link to="/other/our-insurance-partners" onClick={() => setMobileMenu(false)}>Our Insurance Partners</Link>
        <Link to="/other/why-choose-morison" onClick={() => setMobileMenu(false)}>Why Choose Morison Insurance</Link>
        
      </div>
    </div>
  )}
</div>


        </div>
      )}

    </nav>
  );
};

export default Navbar;
