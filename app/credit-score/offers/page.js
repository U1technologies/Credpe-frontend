'use client'
import { motion } from 'framer-motion'

export default function OffersPage() {
  const handleApply = (bank, cardType) => {
    alert(`Redirecting to ${bank} ${cardType} application...`)
  }

  const creditCards = [
    {
      bank: 'HDFC Bank',
      name: 'Regalia Credit Card',
      benefit: '10,000 bonus points',
      cashback: 'Up to 15% cashback',
      features: ['Airport lounge access', 'Fuel surcharge waiver', 'Dining benefits'],
      annual: '₹2,500 + GST',
    },
    {
      bank: 'ICICI Bank',
      name: 'Platinum Chip Card',
      benefit: '₹2,000 Amazon voucher',
      cashback: '2% on all spends',
      features: ['Movie ticket offers', 'Reward points', 'Fuel benefits'],
      annual: '₹500 + GST',
    },
    {
      bank: 'SBI Card',
      name: 'SimplyCLICK Card',
      benefit: 'Welcome vouchers worth ₹2,000',
      cashback: '10X rewards online',
      features: ['Online shopping rewards', 'Dining discounts', 'Insurance cover'],
      annual: '₹499 + GST (waiver)',
    },
    {
      bank: 'Axis Bank',
      name: 'Flipkart Credit Card',
      benefit: 'Unlimited 5% cashback',
      cashback: '5% on Flipkart/Myntra',
      features: ['No joining fee', '₹500 Flipkart voucher', 'Fuel surcharge waiver'],
      annual: '₹500 + GST',
    },
  ]

  const loanOffers = [
    {
      bank: 'Bajaj Finserv',
      type: 'Personal Loan',
      amount: 'Up to ₹25 Lakh',
      rate: 'Starting @ 11% p.a.',
      features: ['Instant disbursal', 'Flexible tenure', 'Minimal documentation'],
    },
    {
      bank: 'HDFC Bank',
      type: 'Personal Loan',
      amount: 'Up to ₹40 Lakh',
      rate: 'Starting @ 10.5% p.a.',
      features: ['Pre-approved offer', 'Same-day approval', 'No foreclosure charges'],
    },
  ]

  return (
    <div className="min-h-screen">
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center text-white max-w-4xl">
       <motion.div
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  className=""
>
  <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full mb-2">
    <div className="p-1.5 rounded-full bg-primary">
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    </div>
    <span className="font-semibold text-primary">Congratulations!</span>
  </div>

  <h2 className="font-bold leading-tight">Exclusive Pre-Approved Offers</h2>
  <p className="text-white text-opacity-90 mt-1">
    Based on your excellent credit score, you have been pre-qualified for these premium offers
  </p>
</motion.div>

        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-12 max-w-5xl">
        {/* Credit Card Offers */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Credit Card Offers</h3>
              <p className="text-gray-600">Choose from top bank credit cards</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {creditCards.map((card, index) => (
              <motion.div
                key={card.bank + card.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-primary rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col"
              >
                <div className="space-y-4 flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-xl text-gray-800">{card.bank}</h3>
                      <p className="text-sm text-gray-600 mt-1">{card.name}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-semibold">Premium</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-green-600 font-semibold">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                      <span>{card.benefit}</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-600 font-semibold">
                      {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 12v7m-3-3h6" />
                      </svg> */}
                      <span>{card.cashback}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {card.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-600">
                      Annual Fee: <span className="font-semibold text-gray-800">{card.annual}</span>
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleApply(card.bank, card.name)}
                  className="w-full mt-6 bg-primary text-white font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  Apply Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Loan Offers */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 12v7m-3-3h6" />
              </svg>
            </div>
            <div>
               <h3 className="font-bold text-gray-800">Personal Loan Offers</h3>
              <p className="text-gray-600">Instant approval with minimal documentation</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {loanOffers.map((loan, index) => (
              <motion.div
                key={loan.bank + loan.type}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-primary rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col"
              >
                <div className="space-y-4 flex-1">
                  <div>
                    <h3 className="font-bold text-xl text-gray-800">{loan.bank}</h3>
                    <p className="text-sm text-gray-600 mt-1">{loan.type}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-xs text-gray-600">Loan Amount</p>
                      <p className="font-bold text-lg text-primary">{loan.amount}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-gray-600">Interest Rate</p>
                      <p className="font-bold text-lg text-accent">{loan.rate}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {loan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleApply(loan.bank, loan.type)}
                  className="w-full mt-6 border-2 !border-accent text-accent hover:bg-accent hover:text-white cursor-pointer font-semibold py-1 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  Check Eligibility
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partner Banks */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-primary-light rounded-2xl border border-primary p-8 text-center"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">
  Partnered with India&apos;s Leading Banks
</h3>

          <div className="flex flex-wrap justify-center gap-4">
            {['HDFC Bank', 'ICICI Bank', 'SBI Card', 'Axis Bank', 'Bajaj Finserv', 'Kotak Mahindra'].map((bank) => (
              <div
                key={bank}
                className="bg-white px-6 py-1 rounded-lg font-semibold shadow-md hover:shadow-lg transition-shadow"
              >
                {bank}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}