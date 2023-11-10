'use client'
import { useCartStore } from '@/store';

export default function Cart() {
  const useStore = useCartStore();

  return (
    <>
    <div
      onClick={() => useStore.toggleCart()} 
      className='flex items-center cursor-pointer relative'>
      <svg  
        xmlns="http://www.w3.org/2000/svg"
        className='h-5 w-5'
        fill="none"
        viewBox='0 0 111 111'

        >
        <path 
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d="M109.579 21.9374C109.195 21.4775 108.715 21.1077 108.172 20.8539C107.629 20.6001 107.037 20.4686 106.438 20.4688H23.887L21.3847 6.72398C21.042 4.83746 20.048 3.13105 18.5761 1.90227C17.1042 0.673491 15.2477 0.000277118 13.3303 0H4.09375C3.00802 0 1.96676 0.431304 1.19903 1.19903C0.431304 1.96676 0 3.00802 0 4.09375C0 5.17948 0.431304 6.22074 1.19903 6.98847C1.96676 7.7562 3.00802 8.1875 4.09375 8.1875H13.3047L26.3842 79.9765C26.7695 82.1056 27.7104 84.095 29.1117 85.7436C27.1776 87.55 25.7817 89.8569 25.0786 92.4082C24.3755 94.9596 24.3929 97.6559 25.1286 100.198C25.8644 102.74 27.2898 105.029 29.2469 106.81C31.204 108.592 33.6162 109.796 36.2162 110.291C38.8161 110.785 41.5021 110.549 43.9763 109.61C46.4506 108.671 48.6164 107.065 50.2336 104.97C51.8508 102.875 52.8562 100.374 53.1384 97.7421C53.4205 95.1107 52.9683 92.4526 51.832 90.0625H75.0743C74.1584 91.9798 73.6845 94.0783 73.6875 96.2031C73.6875 99.037 74.5278 101.807 76.1022 104.163C77.6766 106.52 79.9144 108.356 82.5325 109.441C85.1506 110.525 88.0315 110.809 90.8109 110.256C93.5903 109.703 96.1433 108.338 98.1471 106.335C100.151 104.331 101.516 101.778 102.068 98.9984C102.621 96.219 102.338 93.3381 101.253 90.72C100.169 88.1019 98.3322 85.8641 95.9759 84.2897C93.6197 82.7153 90.8495 81.875 88.0156 81.875H38.4659C37.5072 81.8749 36.5789 81.5383 35.843 80.9239C35.107 80.3095 34.61 79.4563 34.4387 78.513L32.8165 69.5938H92.1759C95.052 69.5933 97.8368 68.5835 100.045 66.7403C102.253 64.8972 103.743 62.3376 104.258 59.5078L110.48 25.2943C110.585 24.7029 110.559 24.0956 110.404 23.5155C110.248 22.9354 109.967 22.3966 109.579 21.9374ZM45.0312 96.2031C45.0312 97.4176 44.6711 98.6049 43.9964 99.6147C43.3216 100.624 42.3626 101.412 41.2405 101.876C40.1185 102.341 38.8838 102.463 37.6926 102.226C36.5015 101.989 35.4073 101.404 34.5485 100.545C33.6898 99.6864 33.1049 98.5923 32.868 97.4011C32.6311 96.2099 32.7527 94.9753 33.2174 93.8532C33.6822 92.7312 34.4693 91.7721 35.4791 91.0974C36.4889 90.4226 37.6761 90.0625 38.8906 90.0625C40.5192 90.0625 42.0811 90.7095 43.2327 91.8611C44.3843 93.0126 45.0312 94.5745 45.0312 96.2031ZM94.1562 96.2031C94.1562 97.4176 93.7961 98.6049 93.1214 99.6147C92.4466 100.624 91.4876 101.412 90.3655 101.876C89.2435 102.341 88.0088 102.463 86.8177 102.226C85.6265 101.989 84.5323 101.404 83.6736 100.545C82.8148 99.6864 82.2299 98.5923 81.993 97.4011C81.7561 96.2099 81.8777 94.9753 82.3424 93.8532C82.8072 92.7312 83.5943 91.7721 84.6041 91.0974C85.6139 90.4226 86.8011 90.0625 88.0156 90.0625C89.6442 90.0625 91.2061 90.7095 92.3577 91.8611C93.5093 93.0126 94.1562 94.5745 94.1562 96.2031ZM96.2031 58.0443C96.0313 58.9901 95.5321 59.8453 94.7929 60.46C94.0538 61.0747 93.1219 61.4097 92.1605 61.4062H31.3274L25.3761 28.6562H101.53L96.2031 58.0443Z" fill="white"/>
      </svg>
      <span 
        className='
        bg-teal-600 
          text-sm 
          font-bold 
          rounded-full 
          h-5 w-5 
          flex items-center justify-center
          absolute
          left-3
          bottom-3'
      >
        2
      </span>
    </div>

    {!useStore.isOpen && (
      <div 
        onClick={() => useStore.toggleCart()}
        className='fixed w-full h-screen bg-black/25 left-0 top-0 z-50'
      >
        <div 
          onClick={(e) => e.stopPropagation()}
          className='absolute bg-slate-600 right-0 top-0 w-1/3 h-screen p-12 overflow-y-scroll'
        >
          <h1>Meu carrinho</h1>
          {useStore.cart.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      </div>
    )}
    
    </>
  )
}