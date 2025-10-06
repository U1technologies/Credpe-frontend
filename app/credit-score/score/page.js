'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
// import CreditScoreGauge from '@/app/components/CreditScore'

export default function ScorePage() {
  const [score, setScore] = useState(0)
  const [report, setReport] = useState(null)
  const [open, setOpen] = useState({ accounts: false, enquiries: false, payment: false })
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const s = Number(localStorage.getItem('credpe_score'))
    const r = localStorage.getItem('credpe_report')
    
    if (!s) {
      router.push('/credit-score')
      return
    }

    const targetScore = s
    const duration = 2000
    const steps = 60
    const increment = targetScore / steps
    let current = 650

    const timer = setInterval(() => {
      current += increment
      if (current >= targetScore) {
        setScore(targetScore)
        clearInterval(timer)
      } else {
        setScore(Math.floor(current))
      }
    }, duration / steps)

    if (r) {
      try {
        setReport(JSON.parse(r))
      } catch {
        console.warn('Invalid JSON in credpe_report')
      }
    }

    return () => clearInterval(timer)
  }, [mounted, router])

  if (!mounted) return null

  if (!score || !report) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your credit score...</p>
        </div>
      </div>
    )
  }

  // ✅ Safely destructure report with defaults
  const accounts = report.accounts || { active: [], closed: [] }
  const age = report.age || { avgYears: 0 }
  const enquiries = report.enquiries || []
  const payment = report.payment || { timelyPercent: 0 }
  const limit = report.limit || { overallUsedPercent: 0 }

  const getScoreColor = (s) => {
    if (s >= 750) return '#16a34a'
    if (s >= 700) return '#eab308'
    if (s >= 650) return '#f97316'
    return '#ef4444'
  }

  const scoreColor = getScoreColor(score)

  const scrollToReports = () => {
    document.getElementById('reports')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen pb-12">
      <div className="container mx-auto px-4 py-8 max-w-5xl">


        {/* Credit Score Display */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl shadow-2xl p-8 md:p-12 text-center bg-primary mb-8"
        >
          <div className='inline-block px-4 py-1 rounded-full bg-white text-primary text-sm mb-2 max-lg:mb-4'>Simulated by Equifax</div>
          <div className="space-y-2">
             
            <div className="space-y-2">
            <motion.h1
  key={score}
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  className="font-bold text-white !text-[6rem] max-lg:!text-[4rem] leading-none"
>
  {score}
</motion.h1>

              <div className="text-3xl max-lg:text-xl font-semibold text-white">/900</div>
            </div>

            <div className="flex justify-center">
              {/* <CreditScoreGauge score={score} /> */}
            </div>

            <div className="flex items-center justify-center gap-2 text-[24px] text-white font-semibold">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                {score >= 750
                  ? 'Excellent'
                  : score >= 650
                  ? 'Good'
                  : 'Fair'}{' '}
                Credit Score
              </span>
            </div>

            <p className="text-white/80 max-w-md mx-auto">
              {score >= 750
                ? 'Your credit score is excellent! You have high chances of getting pre-approved offers from top banks!'
                : score >= 650
                ? 'Your credit score is good. You qualify for many credit card and loan offers.'
                : 'Your credit score is fair. Keep improving it for better offers.'}
            </p>

            <button
              onClick={scrollToReports}
              className="bg-white text-primary hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg mt-4 inline-flex items-center gap-2 transition-colors"
            >
              Check Detailed Reports
              <svg
                className="w-5 h-5 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 ">
          {[
            {
              label: 'Total Accounts',
              value: accounts.active.length + accounts.closed.length,
            },
            { label: 'Avg Age', value: `${age.avgYears} yrs` },
            { label: 'Enquiries', value: enquiries.length },
            { label: 'On-Time %', value: `${payment.timelyPercent}%` },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border !border-primary/20 rounded-xl p-6 shadow-md text-center space-y-2"
            >
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>


        {/* ✅ Restored Detailed Credit Report Section */}
        <div id="reports" className="space-y-6 pt-8">
          <div className="text-center mb-6">
            <h3 className="font-bold text-gray-800">Detailed Credit Report</h3>
            <p className="text-gray-600">Click on any card to view more details</p>
          </div>

          {/* Payment History */}
          <div className="bg-white border border-primary rounded-xl shadow-md overflow-hidden">
            <div 
              className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => setOpen(prev => ({ ...prev, payment: !prev.payment }))}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-xl">Payment History</span>
                    <p className="text-sm text-gray-600">Timely Payments - {report.payment.timelyPercent}%</p>
                  </div>
                </div>
                <svg className={`w-5 h-5 text-gray-400 transition-transform ${open.payment ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            
            {open.payment && (
              <div className="px-6 pb-6 border-t border-gray-100">
                <div className="space-y-4 pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Late Payments</span>
                    <span className="font-semibold text-green-600">{report.payment.late}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">On-Time Payments</span>
                    <span className="font-semibold text-green-600">{report.payment.timelyPercent}%</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="text-left p-3 font-semibold">Bank</th>
                          <th className="text-left p-3 font-semibold">Type</th>
                          <th className="text-left p-3 font-semibold">Payments</th>
                        </tr>
                      </thead>
                      <tbody>
                        {report.payment.banks.map((b, i) => (
                          <tr key={i} className="border-t border-gray-100">
                            <td className="p-3">{b.name}</td>
                            <td className="p-3">{b.type}</td>
                            <td className="p-3 text-green-600 font-medium">{b.timely}/{b.total}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Credit Utilization */}
          <div className="bg-white border border-primary rounded-xl shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
               <span className="font-semibold text-xl">Credit Limit Utilization</span>
                <p className="text-sm text-gray-600">Overall: {report.limit.overallUsedPercent}%</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">Lower utilization is better for your credit score</p>
          </div>

          {/* Accounts */}
          <div className="bg-white border border-primary rounded-xl shadow-md overflow-hidden">
            <div 
              className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => setOpen(prev => ({ ...prev, accounts: !prev.accounts }))}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-xl">Credit Accounts</span>
                    <p className="text-sm text-gray-600">Active: {report.accounts.active.length} • Closed: {report.accounts.closed.length}</p>
                  </div>
                </div>
                <svg className={`w-5 h-5 text-gray-400 transition-transform ${open.accounts ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            
            {open.accounts && (
              <div className="px-6 pb-6 border-t border-gray-100">
                <div className="overflow-x-auto pt-4">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left p-3 font-semibold">Bank</th>
                        <th className="text-left p-3 font-semibold">Type</th>
                        <th className="text-left p-3 font-semibold">Status</th>
                        <th className="text-left p-3 font-semibold">Opened</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...report.accounts.active, ...report.accounts.closed].map((a, i) => (
                        <tr key={i} className="border-t border-gray-100">
                          <td className="p-3">{a.name}</td>
                          <td className="p-3">{a.type}</td>
                          <td className="p-3">
                            <span className={`font-medium ${a.status === 'Active' ? 'text-green-600' : 'text-gray-500'}`}>
                              {a.status}
                            </span>
                          </td>
                          <td className="p-3 text-gray-600">{a.open}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Enquiries */}
          <div className="bg-white border border-primary rounded-xl shadow-md overflow-hidden">
            <div 
              className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => setOpen(prev => ({ ...prev, enquiries: !prev.enquiries }))}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-xl">Credit Enquiries</span>
                    <p className="text-sm text-gray-600">Total: {report.enquiries.length}</p>
                  </div>
                </div>
                <svg className={`w-5 h-5 text-gray-400 transition-transform ${open.enquiries ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            
            {open.enquiries && (
              <div className="px-6 pb-6 border-t border-gray-100">
                <p className="text-sm text-gray-600 mb-4 pt-4">Multiple enquiries in short time can impact your score</p>
                <ul className="space-y-2">
                  {report.enquiries.map((e, i) => (
                    <li key={i} className="flex justify-between text-sm py-2 border-b border-gray-100 last:border-0">
                      <span className="font-medium">{e.name}</span>
                      <span className="text-gray-600">{e.type} • {e.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Profile Status */}
          <div className="bg-white border border-primary rounded-xl shadow-md p-6">
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-600 mb-2">All Clear! ✓</h3>
              <p className="text-sm text-gray-600">No negative marks or defaults found on your credit profile</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className=" rounded-xl shadow-md p-8 text-center border border-primary mt-8 bg-primary-light"
        >
          <h3 className="font-bold text-gray-800">
            Get Pre-Approved Credit Card Offers
          </h3>
          <p className="text-gray-600 mb-6">
            Based on your {score >= 750 ? 'excellent' : 'good'} credit score, you are eligible for premium cards
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push('/credit-score/offers')}
              className="bg-primary cursor-pointer hover:bg-primary text-white px-6 py-2 rounded-lg shadow-lg transition-colors"
            >
              Explore Credit Card Offers
            </button>
            <button
              onClick={() => router.push('/credit-score/offers')}
              className="border !border-accent cursor-pointer bg-white text-accent hover:bg-accent  hover:text-white px-6 py-2 rounded-lg transition-colors"
            >
              Check Loan Eligibility
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-6">
            {['HDFC', 'ICICI', 'SBI', 'Axis', 'Bajaj'].map((bank) => (
              <div key={bank} className="bg-white border border-primary px-4 py-2 rounded-lg font-semibold text-sm shadow-md">
                {bank}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
