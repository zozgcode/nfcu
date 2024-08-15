'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { mockAccounts } from '../mockData/MockData';
import Header from '../header/Header';
import Image from 'next/image';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FaLock } from 'react-icons/fa6';
import { FaQuestionCircle } from 'react-icons/fa';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(account => account.holder.username === username);
    if (!userAccount) {
      setError('User not found');
      return;
    }
    if (userAccount.holder.password !== password) {
      setError('Invalid password');
      return;
    }
    // Store user data in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    router.push('/dashboard');
  };

  const date = new Date();
  const hour = date.getHours();

  return (
    <div className="">
      <Header />
      <div className="h-screen bg-blue-100">
        <div className="px-5 flex flex-col justify-center items-center pt-[30px]">
          <div className="w-full max-w-lg mb-4">
            <h1 className="border text-[#0f3d70] font-semibold text-xl">Welcome to Digital Banking</h1>
          </div>
          <div className="w-full max-w-lg p-5 bg-gray-50 border border-gray-200 rounded-lg shadow-md">
            <div className="mb-6 flex gap-1 items-center">
              <FaLock className="text-xl text-[#0c0d0e]" />
              <h2 className="text-xl font-[500] text-[#0c0d0e]">Sign In</h2>
            </div>
            <div className="mt-3">{error && <p className="text-[20px] text-center mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">{error}</p>}</div>{' '}
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="username" className="text-base font-[700] text-[#0c0d0e]">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your username"
                  onChange={e => setUsername(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-[700] text-[#0c0d0e]">
                  Password
                </label>
                <div className="relative mt-2">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your password"
                    onChange={e => setPassword(e.target.value)}
                  />
                  <button type="submit" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>

              <div>
                <button type="submit" className="w-full py-3 mt-5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="px-4 hidden">
          <div className="border loginBottom mt-[30px] relative rounded-[20px] w-full min-h-[350px] overflow-hidden">
            <div className="absolute bottom-[30px] bg-white p-[10px_30px] w-full left-0 right-0">
              <p className="text-sm text-[#72253D]">Financial Exploration</p>
              <p className="uppercase font-semibold text-[#002856]">Your Financial Guided Tour</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
