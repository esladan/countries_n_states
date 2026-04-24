import { readFile } from 'fs/promises';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'data', 'countries.json');
    const data = await readFile(filePath, 'utf-8');
    const countries = JSON.parse(data);

    const filtered = countries.map((country: any) => ({
      id: country.id,
      name: country.name,
      iso2: country.iso2,
      iso3: country.iso3
    }));
    
    return NextResponse.json(filtered);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch countries' },
      { status: 500 }
    );
  }
}
