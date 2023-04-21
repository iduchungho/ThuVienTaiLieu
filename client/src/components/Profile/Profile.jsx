import React from 'react';
import Header from './../Header';
import ProfileSection from './ProfileSection';
import Footer from './../Footer';

const Profile = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <ProfileSection />
      <Footer />
    </div>
  );
};

export default Profile;
