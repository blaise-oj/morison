import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navcontainer">
      <img src={logo} alt="Morison Insurance" className="logo" />

      <ul className="nav-links">

        {/* HOME MEGA MENU */}
        <li className="dropdown mega-dropdown">
          <span className="nav-link">Home</span>

          <div className="mega-menu">
            <div className="mega-column">
              <h4>Home Coverage</h4>
              <Link to="/home/home-insurance">Home Insurance</Link>
              <Link to="/home/bundled-home-auto">Bundled Home & Auto</Link>
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
              <Link to="/home/duplex-triplex-fourplex">Duplex, Triplex & Fourplex</Link>
              <Link to="/home/chalet-insurance">Chalet Insurance</Link>
              <Link to="/home/cottage-insurance">Cottage Insurance</Link>
            </div>

            <div className="mega-column">
              <h4>Extras & Protection</h4>
              <Link to="/home/contents-insurance">Contents Insurance Coverage</Link>
              <Link to="/home/personal-liability-insurance">Personal Liability Insurance</Link>
              <Link to="/home/home-equipment-breakdown">Home Equipment Breakdown</Link>
              <Link to="/home/outbuilding-insurance">Outbuilding Insurance</Link>
              <Link to="/home/garden-insurance">Garden Insurance</Link>
              <Link to="/home/photography-equipment">Photography Equipment</Link>
              <Link to="/home/home-daycare-insurance">Home Daycare Insurance</Link>
              <Link to="/home/discounts">Discounts</Link>
            </div>
          </div>
        </li>

        {/* AUTO MEGA MENU */}
        <li className="dropdown mega-dropdown">
          <span className="nav-link">Auto</span>

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
          <span className="nav-link">High-Value</span>

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
          <span className="nav-link">Recreation</span>

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
          <span className="nav-link">Business</span>
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
              <Link to="/business/commercial-umbrella-excess-liability">Commercial Umbrella/Excess Liability Coverage</Link>
            </div>
          </div>
        </li>

        {/* OTHER MEGA MENU */}
        <li className="dropdown mega-dropdown">
          <span className="nav-link">Other</span>
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
              <Link to="/other/umbrella-coverage">Umbrella Coverage</Link>
              <Link to="/other/watch-insurance">Watch Insurance</Link>
              <Link to="/other/water-damage-coverage">Water Damage Coverage</Link>
              <Link to="/other/wine-cellar-insurance">Wine Cellar Insurance</Link>
            </div>

            <div className="mega-column">
              <h4>Group Insurance</h4>
              <Link to="/other/grand-erie-district-school-board">Grand Erie District School Board</Link>
              <Link to="/other/haldimand-county">Haldimand County Group Insurance</Link>
              <Link to="/other/norfolk-county">Norfolk County</Link>
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
              <Link to="/other/our-insurance-extras">Our Insurance Extras</Link>
              <Link to="/other/why-choose-morison">Why Choose Morison Insurance</Link>
              <Link to="/other/hole-in-one-insurance">Hole-In-One Insurance</Link>
            </div>
          </div>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
