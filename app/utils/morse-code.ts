// Morse code mapping
export const morseCodeMap: Record<string, string> = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
  'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
  'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
  '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
  '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-',
  '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.'
};

// Vietnamese character mapping
export const vietnameseMorseMap: Record<string, string> = {
  'À': '.-', 'Á': '.-', 'Â': '.-', 'Ã': '.-', 'Ä': '.-', 'Å': '.-',
  'Ă': '.-', 'Ạ': '.-', 'Ả': '.-', 'Ấ': '.-', 'Ầ': '.-', 'Ẩ': '.-',
  'Ẫ': '.-', 'Ậ': '.-', 'Ắ': '.-', 'Ằ': '.-', 'Ẳ': '.-', 'Ẵ': '.-',
  'Ặ': '.-', 'È': '.', 'É': '.', 'Ê': '.', 'Ë': '.', 'Ẹ': '.', 'Ẻ': '.',
  'Ẽ': '.', 'Ế': '.', 'Ề': '.', 'Ể': '.', 'Ễ': '.', 'Ệ': '.', 'Ì': '..',
  'Í': '..', 'Î': '..', 'Ï': '..', 'Ị': '..', 'Ỉ': '..', 'Ĩ': '..',
  'Ò': '---', 'Ó': '---', 'Ô': '---', 'Õ': '---', 'Ö': '---', 'Ọ': '---',
  'Ỏ': '---', 'Ố': '---', 'Ồ': '---', 'Ổ': '---', 'Ỗ': '---', 'Ộ': '---',
  'Ớ': '---', 'Ờ': '---', 'Ở': '---', 'Ỡ': '---', 'Ợ': '---', 'Ù': '..-',
  'Ú': '..-', 'Û': '..-', 'Ü': '..-', 'Ụ': '..-', 'Ủ': '..-', 'Ũ': '..-',
  'Ứ': '..-', 'Ừ': '..-', 'Ử': '..-', 'Ữ': '..-', 'Ự': '..-', 'Ỳ': '-.--',
  'Ý': '-.--', 'Ỷ': '-.--', 'Ỹ': '-.--', 'Đ': '-..', 'Ð': '-..'
};

// Options for encoding/decoding
export interface MorseCodeOptions {
  supportVietnamese: boolean;
  handleSpaces: boolean;
  outputFormat?: string;
}

// Function to encode text to Morse code
export function encodeToMorse(text: string, options: MorseCodeOptions): string {
  const { supportVietnamese, handleSpaces, outputFormat = ' ' } = options;
  
  // Create a combined map with Vietnamese characters if needed
  const combinedMap = { ...morseCodeMap };
  if (supportVietnamese) {
    Object.assign(combinedMap, vietnameseMorseMap);
  }
  
  // Convert text to uppercase for mapping
  const upperText = text.toUpperCase();
  
  // Process each character
  const result: string[] = [];
  for (let i = 0; i < upperText.length; i++) {
    const char = upperText[i];
    
    // Handle spaces
    if (char === ' ') {
      if (handleSpaces) {
        result.push('/');
      }
      continue;
    }
    
    // Add the Morse code if it exists in our mapping
    if (combinedMap[char]) {
      result.push(combinedMap[char]);
    }
  }
  
  // Join with the selected output format
  return result.join(outputFormat);
}

// Function to decode Morse code to text
export function decodeFromMorse(morseText: string, options: MorseCodeOptions): string {
  const { supportVietnamese, handleSpaces } = options;
  
  // Create a reverse mapping from Morse to characters
  const reverseMorseMap: Record<string, string> = {};
  
  // Add standard Morse code mappings
  Object.entries(morseCodeMap).forEach(([char, code]) => {
    reverseMorseMap[code] = char;
  });
  
  // Add Vietnamese mappings if needed (only unique codes)
  if (supportVietnamese) {
    Object.entries(vietnameseMorseMap).forEach(([char, code]) => {
      // Only add if this code doesn't already map to a standard character
      // or if we want to prioritize Vietnamese characters
      if (!reverseMorseMap[code]) {
        reverseMorseMap[code] = char;
      }
    });
  }
  
  // Split the input by spaces to get individual Morse codes
  // Handle different separators
  let morseCodes: string[] = [];
  if (morseText.includes('/')) {
    // If using slash as word separator
    const words = morseText.split('/');
    words.forEach((word, i) => {
      const codes = word.trim().split(/\s+/);
      morseCodes.push(...codes);
      if (i < words.length - 1) {
        morseCodes.push('/');
      }
    });
  } else if (morseText.includes('|')) {
    // If using pipe as word separator
    const words = morseText.split('|');
    words.forEach((word, i) => {
      const codes = word.trim().split(/\s+/);
      morseCodes.push(...codes);
      if (i < words.length - 1) {
        morseCodes.push('|');
      }
    });
  } else {
    // Just split by spaces
    morseCodes = morseText.trim().split(/\s+/);
  }
  
  // Process each Morse code
  const result: string[] = [];
  for (let i = 0; i < morseCodes.length; i++) {
    const code = morseCodes[i];
    
    // Handle word separators
    if (code === '/' || code === '|') {
      if (handleSpaces) {
        result.push(' ');
      }
      continue;
    }
    
    // Skip empty codes
    if (!code) continue;
    
    // Add the character if it exists in our mapping
    if (reverseMorseMap[code]) {
      result.push(reverseMorseMap[code]);
    } else {
      // If we can't decode, just add the code as is
      result.push(`[${code}]`);
    }
  }
  
  return result.join('');
}

// Function to play Morse code audio
export function playMorseAudio(morseCode: string, wpm: number): void {
  // Calculate timing based on WPM
  // Paris standard: "PARIS" = 50 dot units at 20 WPM
  const dotDuration = 1200 / wpm; // milliseconds
  const dashDuration = dotDuration * 3;
  const elementGap = dotDuration;
  const letterGap = dotDuration * 3;
  const wordGap = dotDuration * 7;
  
  // Create audio context
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  
  // Schedule sounds
  let currentTime = audioContext.currentTime;
  
  // Process each character
  for (let i = 0; i < morseCode.length; i++) {
    const char = morseCode[i];
    
    if (char === '.') {
      // Play dot
      playTone(currentTime, dotDuration / 1000);
      currentTime += dotDuration / 1000;
    } else if (char === '-') {
      // Play dash
      playTone(currentTime, dashDuration / 1000);
      currentTime += dashDuration / 1000;
    } else if (char === ' ') {
      // Letter gap (already added element gap, so add the difference)
      currentTime += (letterGap - elementGap) / 1000;
    } else if (char === '/' || char === '|') {
      // Word gap (already added letter gap, so add the difference)
      currentTime += (wordGap - letterGap) / 1000;
    }
    
    // Add element gap after each dot/dash
    if (char === '.' || char === '-') {
      currentTime += elementGap / 1000;
    }
  }
  
  // Function to play a tone
  function playTone(startTime: number, duration: number): void {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.value = 700; // Hz
    
    // Add a slight ramp to avoid clicks
    gainNode.gain.setValueAtTime(0, startTime);
    gainNode.gain.linearRampToValueAtTime(1, startTime + 0.01);
    gainNode.gain.setValueAtTime(1, startTime + duration - 0.01);
    gainNode.gain.linearRampToValueAtTime(0, startTime + duration);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.start(startTime);
    oscillator.stop(startTime + duration);
  }
}

// Function to generate visual representation elements
export function generateMorseVisual(morseCode: string): HTMLElement[] {
  const elements: HTMLElement[] = [];
  
  for (let i = 0; i < morseCode.length; i++) {
    const char = morseCode[i];
    const element = document.createElement('span');
    
    if (char === '.') {
      element.className = 'morse-dot';
    } else if (char === '-') {
      element.className = 'morse-dash';
    } else if (char === ' ') {
      element.className = 'morse-space';
    } else if (char === '/' || char === '|') {
      element.className = 'morse-word-space';
    }
    
    elements.push(element);
  }
  
  return elements;
}

// Reference table data
export const morseReferenceTable = {
  letters: Object.entries(morseCodeMap).filter(([key]) => /^[A-Z]$/.test(key)),
  numbers: Object.entries(morseCodeMap).filter(([key]) => /^[0-9]$/.test(key)),
  punctuation: Object.entries(morseCodeMap).filter(([key]) => !/^[A-Z0-9]$/.test(key))
};
