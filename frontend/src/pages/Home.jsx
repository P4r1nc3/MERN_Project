import React from 'react';
import landingImage from '../assets/landing.jpg';

export default function Home() {
    return (
        <section className="py-5" style={{ maxHeight: 'calc(100vh - 60px)' }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-5 max-w-screen-xl">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                            <span className="text-blue-500">Task</span>Master
                        </h1>
                        <p className="text-lg text-gray-700 mb-6">
                            TaskMaster is your ultimate tool for staying organized and productive. Easily manage your daily tasks, set reminders, and track your progress. Whether for personal use or managing team projects, TaskMaster helps you keep everything on track and in clear view.
                        </p>
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-500 focus:outline-none focus:bg-blue-400 transition duration-300 ease-in-out">
                            Get Started
                        </button>
                    </div>
                    <div className="lg:w-1/2">
                        <img src={landingImage} alt="Efficiently managing tasks on a digital platform" />
                    </div>
                </div>
            </div>
        </section>
    );
}
