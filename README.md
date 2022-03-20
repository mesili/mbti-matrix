## MBTI Matrix

### Introduction 
This is a simple relationship matrix helper to build MBTI compatibility charts based on the 16 basic types. 

### Usage

#### Helper function `mbtiScore(string, string)`
```
import { mbtiScore } from 'mbti-matrix';
const score = mbtiScore('INFP', 'INFP'); // 3
```

#### Types & Matrix 
```
import { types, matrix } from 'mbti-matrix';

const infp = types[0]; // 'INFP'
const infpScore = matrix[0][0]; // 3
```

### Source
The matrix has not a single source, I checked various sources and found out that there are many versions of this chart.  
I used what seems to be the most commonly used one.    
If you want to add another one, feel free to create a PR.  
 
### Scoring
The score goes from 0 (the lowest / worst) to 3 (the highest / best).  
