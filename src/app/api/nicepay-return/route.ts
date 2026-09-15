import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const isGift = data.goodsName && typeof data.goodsName === 'string' && data.goodsName.includes('선물하기');
  
  const content = isGift ? `
    <h2>선물 결제가 완료되었습니다. (테스트)</h2>
    <p>아래 링크를 복사하여 선물 받을 커플에게 전달해 주세요!</p>
    <div style="margin: 20px auto; padding: 15px; border: 2px dashed #ccc; border-radius: 8px; width: 80%; max-width: 400px; font-weight: bold; background: #f9f9f9; word-break: break-all;">
      https://our-wedding-report.com/gift/ABC1234
    </div>
    <button onclick="navigator.clipboard.writeText('https://our-wedding-report.com/gift/ABC1234').then(() => alert('복사되었습니다!'))" style="padding: 10px 20px; font-size: 16px; margin-bottom: 20px; cursor: pointer; background: #FFC0C1; border: none; border-radius: 5px;">링크 복사하기</button>
    <br/>
  ` : `
    <h2>결제 인증이 완료되었습니다. (테스트)</h2>
    <p>인증이 완료되었습니다. (화면 캡처용)</p>
    <button onclick="location.href='/survey'" style="padding: 10px 20px; font-size: 16px; margin-bottom: 20px; cursor: pointer; background: #FFC0C1; border: none; border-radius: 5px;">설문 시작하기</button>
    <br/>
  `;

  return new NextResponse(`
    <!DOCTYPE html>
    <html lang="ko">
      <head>
        <meta charset="utf-8">
        <title>결제 완료 (테스트)</title>
      </head>
      <body style="text-align: center; padding: 50px; font-family: sans-serif; color: #111;">
        ${content}
        <button onclick="location.href='/'" style="padding: 10px 20px; font-size: 16px; border: 1px solid #ccc; background: white; border-radius: 5px; cursor: pointer;">홈으로 돌아가기</button>
      </body>
    </html>
  `, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
