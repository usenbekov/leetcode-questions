/*
File Search API
search with arguments like name, size...

Used Specification Pattern
*/
public class Main {
  public static void main(String[] args) {
    File[] files = {
      new File("abc.xml", 5),
      new File("abc.xml", 10),
      new File("abc.xml", 20),
      new File("abcd.xml", 20)
    };
    
    IFileSpec exactName = new FileExactNameSpec("abc.xml");
    IFileSpec exactSize20 = new FileExactSizeSpec(20);
    IFileSpec exactSize10 = new FileExactSizeSpec(10);
    IFileSpec criteria = exactName.And(exactSize20.Or(exactSize10));
    for (int i = 0; i < files.length; i++) {
      if (criteria.isSatisfiedBy(files[i]))
        System.out.println(files[i].desc());
    }
  }
}

class File {
  String name;
  String content;
  int size;
  File(String name, int size) {
    this.name = name;
    this.size = size;
  }
  public String desc() {
    return this.name + " " + this.size;
  }
}

// File Specification Interface

interface IFileSpec {
  Boolean isSatisfiedBy(File file);
  IFileSpec And(IFileSpec otherSpec);
  IFileSpec Or(IFileSpec otherSpec);
}

class FileCompositeSpec implements IFileSpec {
  public Boolean isSatisfiedBy(File file) {
    return false;
  }
  public IFileSpec And(IFileSpec otherSpec) {
    return new FileAndSpec(this, otherSpec);
  }
  public IFileSpec Or(IFileSpec otherSpec) {
    return new FileOrSpec(this, otherSpec);
  }
}

// And, Or ... Specifications

class FileAndSpec extends FileCompositeSpec {
  protected IFileSpec spec1;
  protected IFileSpec spec2;
  FileAndSpec (IFileSpec spec1, IFileSpec spec2) {
    this.spec1 = spec1;
    this.spec2 = spec2;
  }
  public Boolean isSatisfiedBy(File file) {
    return this.spec1.isSatisfiedBy(file) && this.spec2.isSatisfiedBy(file);
  }
}

class FileOrSpec extends FileCompositeSpec {
  protected IFileSpec spec1;
  protected IFileSpec spec2;
  FileOrSpec (IFileSpec spec1, IFileSpec spec2) {
    this.spec1 = spec1;
    this.spec2 = spec2;
  }
  public Boolean isSatisfiedBy(File file) {
    return this.spec1.isSatisfiedBy(file) || this.spec2.isSatisfiedBy(file);
  }
}

// File Specifications

class FileExactNameSpec extends FileCompositeSpec {
  private String name;
  FileExactNameSpec (String name) {
    this.name = name;
  }
  public Boolean isSatisfiedBy(File file) {
    return this.name.equals(file.name);
  }
}

class FileExactSizeSpec extends FileCompositeSpec {
  private int size;
  FileExactSizeSpec (int size) {
    this.size = size;
  }
  public Boolean isSatisfiedBy(File file) {
    return this.size == file.size;
  }
}

