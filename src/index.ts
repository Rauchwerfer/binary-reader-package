export default class BinaryReader {
    public offset: number
    public buffer: Buffer

    constructor(buffer: Buffer) {
        this.buffer = buffer
        this.offset = 0;
    }

    seek(position: number) {
        if (position < this.buffer.length) {
            this.offset = position
        }        
    }

    readBytes(length: number): Buffer {
        const chars = new Uint8Array(length)

        for (let i = 0; i < length; i++) {
            chars[i] = this.buffer.readUInt8(this.offset)
            this.offset += 1
        }
    
        return Buffer.from(chars)
    }

    readInt32LE() {
        const result = this.buffer.readInt32LE(this.offset)
        this.offset += 4
        return result
    }

    readUInt8() {
        const result = this.buffer.readUInt8(this.offset)
        this.offset += 1
        return result
    }

    readUInt16LE() {
        const result = this.buffer.readUInt16LE(this.offset)
        this.offset += 2
        return result
    }

    readUIntBE() {
        const result = this.buffer.readUIntBE(this.offset, 1)
        this.offset += 1
        return result
    }

    readInt8(): number {
        const result = this.buffer.readInt8(this.offset)
        this.offset += 1    
        return result
    }

    readUIntLE() {
        const result = this.buffer.readUIntLE(this.offset, 1)
        this.offset += 1
        return result
    }

    readInt16LE() {
        const result = this.buffer.readInt16LE(this.offset)
        this.offset += 2
        return result
    }

    readFloatLE() {
        const result = this.buffer.readFloatLE(this.offset)
        this.offset += 4
        return result
    }

    readInt64LE() {
        const result = this.buffer.readBigInt64LE(this.offset)
        this.offset += 8
        return result
    }
}