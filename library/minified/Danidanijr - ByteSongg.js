z=(a=>(t=t-a>0?t-a:0,Z=32,bpm=150,y=44100,sr=y,m=17640,t%=2822400,S=2*t/m,l=S%Z,b=floor(t/4/m),bL=b%4,n=[[76,0,3],[69,3,4],[69,4,5],[72,5,6],[74,6,7],[76,7,8],[77,8,11],[76,11,12],[72,12,14],[74,14,16],[74,16,19],[69,19,20],[69,20,22],[71,22,24],[79,24,27],[76,27,28],[74,28,30],[76,30,Z]],c=[[57,60,64],[57,60,65],[60,64,67],[59,62,67]],A=[45,48,43,40],N=((r,a)=>t/y*(440*2**((r-69)/12))*(a?PI:1)),f=((t,r,a)=>t<=b&&b<=r?a:0),P=n.filter(t=>t[1]<=l&&l<=t[2]-.3)[0],r=t*t/1.743%1,P=P==undefined?P:P[0],(("number"==typeof P?(16*N(P,0)%Z+15.9*N(P,0)%Z+16.1*N(P,0)%Z)/(8/6):0)+f(8,39,(16*N(c[bL][0],0)%Z+16*N(c[bL][1],0)%Z+16*N(c[bL][2],0)%Z)/2+(16.1*N(c[bL][0],0)%Z+16.1*N(c[bL][1],0)%Z+16.1*N(c[bL][2],0)%Z)/2)+f(16,39,40*sin(1e4/(t%m+80))+40)+f(24,39,S%4>2?(40*r+40)/(S%4-2+.7):0)+f(24,39,2*S%4>2?70*sin(N(A[bL],1))+5:0)+f(24,39,5*sin(8*N(c[bL][0],1))+5*sin(8*N(c[bL][1],1))+5*sin(8*N(c[bL][2],1))))/2.1)),z(0)+(z(1974)/3.2+z(5317)/4.8+z(10521)/3.7+z(27423)/6.3+z(3531)/5.6)/2