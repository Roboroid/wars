function kangaroo(kanga1, rate1, kanga2, rate2) {
  
    return (rate1 - rate2)>0 && (kanga2-kanga1)>0 && (kanga2-kanga1)%(rate1 - rate2)==0;
  
  }