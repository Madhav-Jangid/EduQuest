/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  size?: 'sm' | 'default' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  size = 'default',
  variant = 'primary',
  onClick
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500';

  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5 space-x-1.5',
    default: 'text-base px-4 py-2 space-x-2',
    lg: 'text-lg px-6 py-3 space-x-3',
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-300 dark:border-slate-600',
    outline: 'bg-transparent text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-800',
  };

  const downloadAPK = async () => {
    try {
      // Fetch the latest release from GitHub API
      const response = await fetch('https://api.github.com/repos/Madhav-Jangid/EduQuest/releases/latest');
      const release = await response.json();

      // Find the APK asset in the release
      const apkAsset = release.assets.find((asset: any) => asset.name === 'app-release.apk');
      if (!apkAsset) {
        console.error('APK not found in the latest release');
        return;
      }

      const apkUrl = apkAsset.browser_download_url;

      const link = document.createElement('a');
      link.href = apkUrl;
      link.setAttribute('download', 'EduQuest.apk');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      if (onClick) onClick();
    } catch (error) {
      console.error('Error fetching APK URL:', error);
    }
  };

  return (
    <button
      onClick={downloadAPK}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`}
    >
      <Download size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />
      <span>Download APK</span>
    </button>
  );
};

export default DownloadButton;