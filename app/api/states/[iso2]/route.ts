import { readFile } from 'fs/promises';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { iso2: string } }
) {
  try {
    console.log('Received request for states with params:', await params);
    const { iso2 } = await params;
    const filePath = join(process.cwd(), 'data', 'states.json');
    const data = await readFile(filePath, 'utf-8');
    const states = JSON.parse(data);

    const filtered = states.filter((state: any) => state.country_code === iso2);
    const mapped = filtered.map((state: any) => ({
      id: state.id,
      name: state.name,
      iso2: state.iso2
    }));
    
    return NextResponse.json(mapped);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch states' },
      { status: 500 }
    );
  }
}
