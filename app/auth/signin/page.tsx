import Link from 'next/link';
import { FaGoogle, FaGithub } from 'react-icons/fa';

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f10] to-[#1a1a2e] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-1 rounded-lg">
              <div className="bg-[#0f0f10] rounded-md p-2">
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-xl">
                  FAIRFORM
                </span>
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back</h1>
          <p className="text-[#a0a0a6]">Sign in to your Fairform account</p>
        </div>
        
        <div className="bg-[#171719] border border-[#252529] rounded-xl p-8">
          {/* Email Input */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-[#a0a0a6] mb-2">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full bg-[#0f0f10] border border-[#3f3f46] rounded-lg px-4 py-3 text-white placeholder-[#6b6b7b] focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="you@company.com"
            />
          </div>
          
          {/* Password Input */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="password" className="block text-sm font-medium text-[#a0a0a6]">
                Password
              </label>
              <Link href="/auth/forgot-password" className="text-sm text-blue-400 hover:text-blue-300">
                Forgot password?
              </Link>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full bg-[#0f0f10] border border-[#3f3f46] rounded-lg px-4 py-3 text-white placeholder-[#6b6b7b] focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>
          
          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 px-4 rounded-lg font-medium text-white hover:shadow-[0_0_20px_rgba(66,153,225,0.5)] transition-all mb-6"
          >
            Sign in
          </button>
          
          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#3f3f46]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#171719] text-[#a0a0a6]">
                Or continue with
              </span>
            </div>
          </div>
          
          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="flex items-center justify-center bg-[#0f0f10] border border-[#3f3f46] rounded-lg py-3 px-4 text-white hover:bg-[#1a1a1f] transition-colors"
            >
              <FaGoogle className="h-5 w-5 mr-2 text-[#ea4335]" />
              Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center bg-[#0f0f10] border border-[#3f3f46] rounded-lg py-3 px-4 text-white hover:bg-[#1a1a1f] transition-colors"
            >
              <FaGithub className="h-5 w-5 mr-2 text-[#f5f5f5]" />
              GitHub
            </button>
          </div>
        </div>
        
        <div className="mt-8 text-center text-[#a0a0a6]">
          <p>
            Don't have an account?{' '}
            <Link href="/auth/signup" className="text-blue-400 hover:text-blue-300 font-medium">
              Sign up
            </Link>
          </p>
        </div>
        
        {/* Legal footer */}
        <div className="mt-12 text-center text-xs text-[#6b6b7b] max-w-md mx-auto">
          <p>
            By signing in, you agree to our{' '}
            <Link href="/terms" className="text-[#a0a0a6] hover:text-white">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-[#a0a0a6] hover:text-white">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
