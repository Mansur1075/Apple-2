import React from 'react'
import Container from './Container'

const Footer = () => {
    return (
        <footer className="w-full bg-[#f5f5f7] text-[#1d1d1f] text-[12px] pt-8 pb-12 font-normal">
            <Container>
                <div className="max-w-5xl mx-auto px-4">

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 pb-6">

                        <div className="flex flex-col gap-6">
                            <div>
                                <h3 className="text-[#1d1d1f] font-semibold mb-2">Shop and Learn</h3>
                                <ul className="flex flex-col gap-2 text-[#424245]">
                                    <li><a href="#" className="hover:underline">Store</a></li>
                                    <li><a href="#" className="hover:underline">Mac</a></li>
                                    <li><a href="#" className="hover:underline">iPad</a></li>
                                    <li><a href="#" className="hover:underline">iPhone</a></li>
                                    <li><a href="#" className="hover:underline">Watch</a></li>
                                    <li><a href="#" className="hover:underline">AirPods</a></li>
                                    <li><a href="#" className="hover:underline">TV & Home</a></li>
                                    <li><a href="#" className="hover:underline">AirTag</a></li>
                                    <li><a href="#" className="hover:underline">Accessories</a></li>
                                    <li><a href="#" className="hover:underline">Gift Cards</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-[#1d1d1f] font-semibold mb-2">Apple Wallet</h3>
                                <ul className="flex flex-col gap-2 text-[#424245]">
                                    <li><a href="#" className="hover:underline">Wallet</a></li>
                                    <li><a href="#" className="hover:underline">Apple Card</a></li>
                                    <li><a href="#" className="hover:underline">Apple Pay</a></li>
                                    <li><a href="#" className="hover:underline">Apple Cash</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div>
                                <h3 className="text-[#1d1d1f] font-semibold mb-2">Account</h3>
                                <ul className="flex flex-col gap-2 text-[#424245]">
                                    <li><a href="#" className="hover:underline">Manage Your Apple ID</a></li>
                                    <li><a href="#" className="hover:underline">Apple Store Account</a></li>
                                    <li><a href="#" className="hover:underline">iCloud.com</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-[#1d1d1f] font-semibold mb-2">Entertainment</h3>
                                <ul className="flex flex-col gap-2 text-[#424245]">
                                    <li><a href="#" className="hover:underline">Apple One</a></li>
                                    <li><a href="#" className="hover:underline">Apple TV+</a></li>
                                    <li><a href="#" className="hover:underline">Apple Music</a></li>
                                    <li><a href="#" className="hover:underline">Apple Arcade</a></li>
                                    <li><a href="#" className="hover:underline">Apple Fitness+</a></li>
                                    <li><a href="#" className="hover:underline">Apple News+</a></li>
                                    <li><a href="#" className="hover:underline">Apple Podcasts</a></li>
                                    <li><a href="#" className="underline">Apple Books</a></li>
                                    <li><a href="#" className="hover:underline">App Store</a></li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[#1d1d1f] font-semibold mb-2">Apple Store</h3>
                            <ul className="flex flex-col gap-2 text-[#424245]">
                                <li><a href="#" className="hover:underline">Find a Store</a></li>
                                <li><a href="#" className="hover:underline">Genius Bar</a></li>
                                <li><a href="#" className="hover:underline">Today at Apple</a></li>
                                <li><a href="#" className="hover:underline">Apple Camp</a></li>
                                <li><a href="#" className="hover:underline">Apple Store App</a></li>
                                <li><a href="#" className="hover:underline">Certified Refurbished</a></li>
                                <li><a href="#" className="hover:underline">Apple Trade In</a></li>
                                <li><a href="#" className="hover:underline">Financing</a></li>
                                <li><a href="#" className="hover:underline">Carrier Deals at Apple</a></li>
                                <li><a href="#" className="hover:underline">Order Status</a></li>
                                <li><a href="#" className="hover:underline">Shopping Help</a></li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div>
                                <h3 className="text-[#1d1d1f] font-semibold mb-2">For Business</h3>
                                <ul className="flex flex-col gap-2 text-[#424245]">
                                    <li><a href="#" className="hover:underline">Apple and Business</a></li>
                                    <li><a href="#" className="hover:underline">Shop for Business</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-[#1d1d1f] font-semibold mb-2">For Education</h3>
                                <ul className="flex flex-col gap-2 text-[#424245]">
                                    <li><a href="#" className="hover:underline">Apple and Education</a></li>
                                    <li><a href="#" className="hover:underline">Shop for K-12</a></li>
                                    <li><a href="#" className="hover:underline">Shop for College</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-[#1d1d1f] font-semibold mb-2">For Healthcare</h3>
                                <ul className="flex flex-col gap-2 text-[#424245]">
                                    <li><a href="#" className="hover:underline">Apple in Healthcare</a></li>
                                    <li><a href="#" className="hover:underline">Health on Apple Watch</a></li>
                                    <li><a href="#" className="hover:underline">Health Records on iPhone</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-[#1d1d1f] font-semibold mb-2">For Government</h3>
                                <ul className="flex flex-col gap-2 text-[#424245]">
                                    <li><a href="#" className="hover:underline">Shop for Government</a></li>
                                    <li><a href="#" className="hover:underline">Shop for Veterans and Military</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div>
                                <h3 className="text-[#1d1d1f] font-semibold mb-2">Apple Values</h3>
                                <ul className="flex flex-col gap-2 text-[#424245]">
                                    <li><a href="#" className="hover:underline">Accessibility</a></li>
                                    <li><a href="#" className="hover:underline">Education</a></li>
                                    <li><a href="#" className="hover:underline">Environment</a></li>
                                    <li><a href="#" className="hover:underline">Inclusion and Diversity</a></li>
                                    <li><a href="#" className="hover:underline">Privacy</a></li>
                                    <li><a href="#" className="hover:underline">Racial Equity and Justice</a></li>
                                    <li><a href="#" className="hover:underline">Supplier Responsibility</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-[#1d1d1f] font-semibold mb-2">About Apple</h3>
                                <ul className="flex flex-col gap-2 text-[#424245]">
                                    <li><a href="#" className="hover:underline">Newsroom</a></li>
                                    <li><a href="#" className="hover:underline">Apple Leadership</a></li>
                                    <li><a href="#" className="hover:underline">Career Opportunities</a></li>
                                    <li><a href="#" className="hover:underline">Investors</a></li>
                                    <li><a href="#" className="hover:underline">Ethics & Compliance</a></li>
                                    <li><a href="#" className="hover:underline">Events</a></li>
                                    <li><a href="#" className="hover:underline">Contact Apple</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="text-[#f5f5f7] font-helvetica font-bold pb-4 border-b border-[#d2d2d7] mb-4">
                        More ways to shop: <a href="#" className="text-[#0066cc] underline">Find an Apple Store</a> or <a href="#" className="text-[#0066cc] underline">other retailer</a> near you. Or call 1-800-MY-APPLE.
                    </div>

                    <div className="flex flex-col md:flex-row md:justify-between text-[#6e6e73] gap-4">
                        <div className="flex flex-col md:flex-row gap-2 md:gap-6">
                            <span>Copyright © 2023 Apple Inc. All rights reserved.</span>
                            <div className="flex flex-wrap gap-x-2 gap-y-1">
                                <a href="#" className="hover:underline border-r border-[#d2d2d7] pr-2 last:border-0">Privacy Policy</a>
                                <a href="#" className="hover:underline border-r border-[#d2d2d7] pr-2 last:border-0">Terms of Use</a>
                                <a href="#" className="hover:underline border-r border-[#d2d2d7] pr-2 last:border-0">Sales and Refunds</a>
                                <a href="#" className="hover:underline border-r border-[#d2d2d7] pr-2 last:border-0">Legal</a>
                                <a href="#" className="hover:underline">Site Map</a>
                            </div>
                        </div>
                        <div className="text-left md:text-right">
                            <a href="#" className="hover:underline">United States</a>
                        </div>
                    </div>

                </div>
            </Container>
        </footer>
    )
}

export default Footer